'use strict';

const { PassThrough } = require('stream');

const { RTCAudioSink, RTCVideoSink } = require('wrtc').nonstandard;

const ffmpeg = require('fluent-ffmpeg')
const { StreamInput } = require('fluent-ffmpeg-multistream')

const VIDEO_OUTPUT_SIZE = '320x240'
const VIDEO_OUTPUT_FILE = './recording.mp4'

let UID = 0;

function beforeOffer(peerConnection) {
  const audioTransceiver = peerConnection.addTransceiver('audio');
  const videoTransceiver = peerConnection.addTransceiver('video');
  const audioSink = new RTCAudioSink(audioTransceiver.receiver.track);
  const videoSink = new RTCVideoSink(videoTransceiver.receiver.track);

  let streamAudio = new PassThrough();

  let streamVideo = null;
  let streamSize = "";
  videoSink.addEventListener('frame', ({ frame: { width, height, data }}) => {
    let size = `${width}x${height}`;
    if (streamVideo && (streamSize && streamSize === size)) {
      streamVideo.push(Buffer.from(data));
    }else{
      if(streamAudio) { streamAudio.end(); }
      if(streamVideo) { streamVideo.end(); }
      streamSize = size;

      streamVideo = new PassThrough();
      streamAudio = new PassThrough();

      const onAudioData = audioSink.addEventListener('data', (data) => {
        console.log(data.bitsPerSample, data.sampleRate);
        streamAudio.push(Buffer.from(data.samples.buffer));
      });
      streamAudio.on('data', () => {
        audioSink.removeEventListener('data', onAudioData);
      });

      const proc = ffmpeg()
          .addInput((new StreamInput(streamVideo)).url)
          .addInputOptions([
            '-f', 'rawvideo',
            '-pix_fmt', 'yuv420p',
            '-s', size,
            '-r', '30',
          ])
          .addInput((new StreamInput(streamAudio)).url)
          .addInputOptions([
            '-f s16le',
            '-ar 48k',
            '-ac 1',
          ])
          .on('start', ()=>{
            console.log('Start recording >> ', size)
          })
          .on('end', ()=>{
            console.log('Stop recording >> ', size)
          })
          .size(VIDEO_OUTPUT_SIZE)
          .outputFormat('flv')
          .output('rtmp://localhost:1935/stream/hello');

      proc.run();

    }

  });

  const { close } = peerConnection;
  peerConnection.close = function() {
    console.log("EXIT");
    audioSink.stop();
    videoSink.stop();
    streamVideo.end();
    streamAudio.end();
    return close.apply(this, arguments);
  }
}

module.exports = { beforeOffer };
