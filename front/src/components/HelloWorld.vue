<template>
  <div>
    <video id="myStream" autoplay playsinline></video>
    <input v-model="token">
    <input v-model="key">
      <button type="button" v-on:click="startStream()">start stream</button>
  </div>
</template>

<script>
  import adapter from 'webrtc-adapter';
  adapter;
  import ConnectionClient from '../libs/peerConnection';

  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data: function () {
      return {
        token: 'aa',
        key:''
      }
    },
    methods: {
      startStream : async function() {
        const video        = document.querySelector('#myStream');
        const stream = await navigator.mediaDevices.getUserMedia({video: {frameRate: {min:25,max:25},width: {exact: 720}, height: {exact: 480}},audio: true});
        const connectionClient = new ConnectionClient({
          host : 'http://localhost:3001/',
          token: this.token,
          key: this.key
        });
        connectionClient.createConnection({
          beforeAnswer : (peerConnection) => {
            console.log(stream.getVideoTracks()[0].getConstraints());
            stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));
            console.log(stream.getTracks());
            const { close } = peerConnection;
            peerConnection.close = function() {
              video.srcObject = null;
              stream.getTracks().forEach(track => track.stop());
              return close.apply(this, arguments);
            };
          }
        });
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
