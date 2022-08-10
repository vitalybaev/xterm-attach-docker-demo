import { Terminal } from 'xterm';
import { AttachAddon } from 'xterm-addon-attach';
import { FitAddon } from 'xterm-addon-fit';

import 'xterm/css/xterm.css'

const term = new Terminal({ cursorBlink: true });

const fitAddon = new FitAddon();
term.loadAddon(fitAddon);

term.open(document.querySelector('#app'));
// term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')

// 134.209.234.203:2375 - IP and port of a Docker daemon
// 69190fae55cbce703225f03b96bc490f4e12e16118ae4d0604ec2eb0fe894ef9 - container ID
const socket = new WebSocket('ws://134.209.234.203:2375/containers/69190fae55cbce703225f03b96bc490f4e12e16118ae4d0604ec2eb0fe894ef9/attach/ws?logs=0&stream=1');
const attachAddon = new AttachAddon(socket);

// Attach the socket to term
term.loadAddon(attachAddon);

fitAddon.fit();