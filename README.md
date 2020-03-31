cd back
npm i
npm start

cd front
npm i
npm run serve

docker run -it -p 1935:1935 -p 8081:80 --rm alfg/nginx-rtmp

git clone https://github.com/video-dev/hls.js.git --depth 1 
cd hls.js
npm i 
npm run dev


## LOG
### API
kubectl logs prod-musicapi-68bf466568-lv9hg --namespace=musicapi-17718890-prod




sdp: "v=0
↵o=- 3052125689805821542 2 IN IP4 127.0.0.1
↵s=-
↵t=0 0
↵a=group:BUNDLE 0 1
↵a=msid-semantic: WMS Vd22ZsKDZnI8Fgg0Y9kjiHXkW0XEYqcysthr
↵m=audio 9 UDP/TLS/RTP/SAVPF 111 103 104 9 0 8 106 105 13 110 112 113 126
↵c=IN IP4 0.0.0.0
↵a=rtcp:9 IN IP4 0.0.0.0
↵a=ice-ufrag:a3GW
↵a=ice-pwd:e4k1o06lO3BXLcWBSN1hZpAX
↵a=ice-options:trickle
↵a=fingerprint:sha-256 B6:05:FD:C1:07:2C:60:21:3F:B4:DA:3E:E0:6C:4F:0E:7D:9E:CE:C1:BC:D4:53:25:54:49:57:B0:02:D0:64:D4
↵a=setup:active
↵a=mid:0
↵a=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level
↵a=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time
↵a=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01
↵a=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid
↵a=extmap:5 urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id
↵a=extmap:6 urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id
↵a=sendrecv
↵a=msid:Vd22ZsKDZnI8Fgg0Y9kjiHXkW0XEYqcysthr f2006046-aaf5-4380-8469-f4990c6dd271
↵a=rtcp-mux
↵a=rtpmap:111 opus/48000/2
↵a=rtcp-fb:111 transport-cc
↵a=fmtp:111 minptime=10;useinbandfec=1
↵a=rtpmap:103 ISAC/16000
↵a=rtpmap:104 ISAC/32000
↵a=rtpmap:9 G722/8000
↵a=rtpmap:0 PCMU/8000
↵a=rtpmap:8 PCMA/8000
↵a=rtpmap:106 CN/32000
↵a=rtpmap:105 CN/16000
↵a=rtpmap:13 CN/8000
↵a=rtpmap:110 telephone-event/48000
↵a=rtpmap:112 telephone-event/32000
↵a=rtpmap:113 telephone-event/16000
↵a=rtpmap:126 telephone-event/8000
↵a=ssrc:1486109985 cname:YGLrvOeK+Q8MXk5X
↵m=video 9 UDP/TLS/RTP/SAVPF 96 97 98 99 100 101 127 124 125
↵c=IN IP4 0.0.0.0
↵a=rtcp:9 IN IP4 0.0.0.0
↵a=ice-ufrag:a3GW
↵a=ice-pwd:e4k1o06lO3BXLcWBSN1hZpAX
↵a=ice-options:trickle
↵a=fingerprint:sha-256 B6:05:FD:C1:07:2C:60:21:3F:B4:DA:3E:E0:6C:4F:0E:7D:9E:CE:C1:BC:D4:53:25:54:49:57:B0:02:D0:64:D4
↵a=setup:active
↵a=mid:1
↵a=extmap:14 urn:ietf:params:rtp-hdrext:toffset
↵a=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time
↵a=extmap:13 urn:3gpp:video-orientation
↵a=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01
↵a=extmap:12 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay
↵a=extmap:11 http://www.webrtc.org/experiments/rtp-hdrext/video-content-type
↵a=extmap:7 http://www.webrtc.org/experiments/rtp-hdrext/video-timing
↵a=extmap:8 http://tools.ietf.org/html/draft-ietf-avtext-framemarking-07
↵a=extmap:9 http://www.webrtc.org/experiments/rtp-hdrext/color-space
↵a=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid
↵a=extmap:5 urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id
↵a=extmap:6 urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id
↵a=sendrecv
↵a=msid:Vd22ZsKDZnI8Fgg0Y9kjiHXkW0XEYqcysthr e6ba915a-dcb8-42d8-b1ce-bb281a427196
↵a=rtcp-mux
↵a=rtcp-rsize
↵a=rtpmap:96 VP8/90000
↵a=rtcp-fb:96 goog-remb
↵a=rtcp-fb:96 transport-cc
↵a=rtcp-fb:96 ccm fir
↵a=rtcp-fb:96 nack
↵a=rtcp-fb:96 nack pli
↵a=rtpmap:97 rtx/90000
↵a=fmtp:97 apt=96
↵a=rtpmap:98 VP9/90000
↵a=rtcp-fb:98 goog-remb
↵a=rtcp-fb:98 transport-cc
↵a=rtcp-fb:98 ccm fir
↵a=rtcp-fb:98 nack
↵a=rtcp-fb:98 nack pli
↵a=fmtp:98 profile-id=0
↵a=rtpmap:99 rtx/90000
↵a=fmtp:99 apt=98
↵a=rtpmap:100 VP9/90000
↵a=rtcp-fb:100 goog-remb
↵a=rtcp-fb:100 transport-cc
↵a=rtcp-fb:100 ccm fir
↵a=rtcp-fb:100 nack
↵a=rtcp-fb:100 nack pli
↵a=fmtp:100 profile-id=2
↵a=rtpmap:101 rtx/90000
↵a=fmtp:101 apt=100
↵a=rtpmap:127 red/90000
↵a=rtpmap:124 rtx/90000
↵a=fmtp:124 apt=127
↵a=rtpmap:125 ulpfec/90000
↵a=ssrc-group:FID 376953773 1427743893
↵a=ssrc:376953773 cname:YGLrvOeK+Q8MXk5X
↵a=ssrc:1427743893 cname:YGLrvOeK+Q8MXk5X
↵"

















sdp: "v=0
↵o=- 2107611463883920533 2 IN IP4 127.0.0.1
↵s=-
↵t=0 0
↵a=group:BUNDLE 0 1
↵a=msid-semantic: WMS kNd9ijZqZkABgxkddDMwQJ4nEF9FItBCXwRw
↵m=audio 9 UDP/TLS/RTP/SAVPF 111 103 104 9 0 8 106 105 13 110 112 113 126
↵c=IN IP4 0.0.0.0
↵a=rtcp:9 IN IP4 0.0.0.0
↵a=ice-ufrag:t5YZ
↵a=ice-pwd:qt4VRiQDdl+B4OSEG/u5UDs6
↵a=ice-options:trickle
↵a=fingerprint:sha-256 E2:3B:D8:B9:05:1F:C9:DF:26:A3:C8:2E:C2:41:4C:4A:DB:94:F5:14:27:B6:DC:78:08:AA:86:A4:47:B1:1C:8C
↵a=setup:active
↵a=mid:0
↵a=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level
↵a=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time
↵a=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01
↵a=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid
↵a=extmap:5 urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id
↵a=extmap:6 urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id
↵a=sendrecv
↵a=msid:kNd9ijZqZkABgxkddDMwQJ4nEF9FItBCXwRw 02cc95f6-7813-4dcc-b75f-5b9969a0aa6e
↵a=rtcp-mux
↵a=rtpmap:111 opus/48000/2
↵a=rtcp-fb:111 transport-cc
↵a=fmtp:111 minptime=10;useinbandfec=1
↵a=rtpmap:103 ISAC/16000
↵a=rtpmap:104 ISAC/32000
↵a=rtpmap:9 G722/8000
↵a=rtpmap:0 PCMU/8000
↵a=rtpmap:8 PCMA/8000
↵a=rtpmap:106 CN/32000
↵a=rtpmap:105 CN/16000
↵a=rtpmap:13 CN/8000
↵a=rtpmap:110 telephone-event/48000
↵a=rtpmap:112 telephone-event/32000
↵a=rtpmap:113 telephone-event/16000
↵a=rtpmap:126 telephone-event/8000
↵a=ssrc:3643237315 cname:EL2Y3d9u0KblG9Ew
↵m=video 9 UDP/TLS/RTP/SAVPF 96 97 98 99 100 101 127 124 125
↵c=IN IP4 0.0.0.0
↵a=rtcp:9 IN IP4 0.0.0.0
↵a=ice-ufrag:t5YZ
↵a=ice-pwd:qt4VRiQDdl+B4OSEG/u5UDs6
↵a=ice-options:trickle
↵a=fingerprint:sha-256 E2:3B:D8:B9:05:1F:C9:DF:26:A3:C8:2E:C2:41:4C:4A:DB:94:F5:14:27:B6:DC:78:08:AA:86:A4:47:B1:1C:8C
↵a=setup:active
↵a=mid:1
↵a=extmap:14 urn:ietf:params:rtp-hdrext:toffset
↵a=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time
↵a=extmap:13 urn:3gpp:video-orientation
↵a=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01
↵a=extmap:12 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay
↵a=extmap:11 http://www.webrtc.org/experiments/rtp-hdrext/video-content-type
↵a=extmap:7 http://www.webrtc.org/experiments/rtp-hdrext/video-timing
↵a=extmap:8 http://tools.ietf.org/html/draft-ietf-avtext-framemarking-07
↵a=extmap:9 http://www.webrtc.org/experiments/rtp-hdrext/color-space
↵a=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid
↵a=extmap:5 urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id
↵a=extmap:6 urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id
↵a=sendrecv
↵a=msid:kNd9ijZqZkABgxkddDMwQJ4nEF9FItBCXwRw afc3cfc3-b338-4596-a857-14c3ff218376
↵a=rtcp-mux
↵a=rtcp-rsize
↵a=rtpmap:96 VP8/90000
↵a=rtcp-fb:96 goog-remb
↵a=rtcp-fb:96 transport-cc
↵a=rtcp-fb:96 ccm fir
↵a=rtcp-fb:96 nack
↵a=rtcp-fb:96 nack pli
↵a=rtpmap:97 rtx/90000
↵a=fmtp:97 apt=96
↵a=rtpmap:98 VP9/90000
↵a=rtcp-fb:98 goog-remb
↵a=rtcp-fb:98 transport-cc
↵a=rtcp-fb:98 ccm fir
↵a=rtcp-fb:98 nack
↵a=rtcp-fb:98 nack pli
↵a=fmtp:98 profile-id=0
↵a=rtpmap:99 rtx/90000
↵a=fmtp:99 apt=98
↵a=rtpmap:100 VP9/90000
↵a=rtcp-fb:100 goog-remb
↵a=rtcp-fb:100 transport-cc
↵a=rtcp-fb:100 ccm fir
↵a=rtcp-fb:100 nack
↵a=rtcp-fb:100 nack pli
↵a=fmtp:100 profile-id=2
↵a=rtpmap:101 rtx/90000
↵a=fmtp:101 apt=100
↵a=rtpmap:127 red/90000
↵a=rtpmap:124 rtx/90000
↵a=fmtp:124 apt=127
↵a=rtpmap:125 ulpfec/90000
↵a=ssrc-group:FID 3134777479 2629186723
↵a=ssrc:3134777479 cname:EL2Y3d9u0KblG9Ew
↵a=ssrc:2629186723 cname:EL2Y3d9u0KblG9Ew
↵"
