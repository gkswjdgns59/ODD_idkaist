import socketIOClient from 'socket.io-client';

//hosting 이후 url 포함하도록 수정 필요
const ENDPOINT = "http://localhost:4000"

const socket = socketIOClient(ENDPOINT);
export default socket;