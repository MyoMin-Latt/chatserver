const { Server } = require('socket.io');
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('your_event', (data) => {
        console.log('message: ' + data.message);
        // Echo the message back to the client
        socket.emit('your_event', { message: 'Hello, Client!' });
    });
});

app.get('/', (req, res) => {
    res.send('Socket.IO server is running');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
