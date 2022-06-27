import socketIOClient from 'socket.io-client';

// hosting 시 변경 필요!!
const ENDPOINT = "https://odd-idkaist.herokuapp.com/"
// const ENDPOINT = "http://localhost:4000"

const socket = socketIOClient(ENDPOINT);
export default socket;