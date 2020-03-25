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
