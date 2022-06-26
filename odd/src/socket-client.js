import socketIOClient from 'socket.io-client';

//hosting 이후 url 포함하도록 수정 필요
const ENDPOINT = "https://odd-idkaist.herokuapp.com/"

const socket = socketIOClient(ENDPOINT);
export default socket;