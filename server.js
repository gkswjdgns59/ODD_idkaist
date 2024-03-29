const express = require('express');
const http = require('http');
const Io = require('socket.io');

const port = process.env.PORT || process.env.port || 4000;
const app = express();
app.use(express.static('public'));
const server = http.createServer(app);
const PORT = 4000;

if (process.env.NODE_ENV === "production") {
    app.use(express.static("odd/build"));
  }
  
  app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "odd/build", "index.html"));
  });

let { userList } = require("./database");

const io = Io(server, {
    cors: {
        origin: true,
        methods: ["GET", "POST"]
    }
});
    
io.on('connection', (socket) => {
    console.log(`Welcome, ${socket.id}`);

    //add user on database
    const DEFAULT_ROOM = 100; //1F counter

    userList[socket.id] = {
        "socketID" : socket.id,
        "userName" : null,
        "roomNumber" : DEFAULT_ROOM
    }

    socket.join(DEFAULT_ROOM.toString());
    socket.to(DEFAULT_ROOM.toString()).emit('update', userList);
    socket.emit('update', userList);

    socket.on('knock', (roomNumber) => {
        const prevRoom = userList[socket.id].roomNumber.toString();
        const newRoom = roomNumber;

        userList[socket.id].roomNumber = roomNumber;

        socket.to(prevRoom).to(newRoom).emit('update', userList);
        socket.leave(prevRoom);
        socket.join(newRoom);
        socket.emit('whereUare', userList[socket.id].roomNumber);
    })

    socket.on('whereIam', () => {
        socket.emit('whereUare', userList[socket.id].roomNumber);
    })

    socket.on('moveGhost', (value) => {
        socket.emit('moveBackground', -value);
    })

    socket.on('warpRequest', () => {
        socket.emit('warpGhost');
    })

    socket.on('disconnect', () => {
        const curRoom = userList[socket.id].roomNumber.toString();

        console.log(`${socket.id} Disconnected`);
        delete userList[socket.id];

        socket.to(curRoom).emit('update', userList);

    })
})

server.listen(port, () => console.log(`Listening on port ${port}`));