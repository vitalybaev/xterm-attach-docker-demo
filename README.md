# Docker Xterm Attach Demo

## Prepare Docker
1. Bind Docker Daemon also to TCP socket with default port 2375
2. Run any docker container, don't forget to add `-i` flag to it
3. Copy container ID

## Run app
1. Update Docker IP, port and container ID in `./main.js`
2. Run app: `npm install && npm run dev`