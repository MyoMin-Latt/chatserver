const express = require("express");
var http = require("http");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
var server = http.createServer(app);
var io = require("socket.io")(server);

// middleware
app.use(express.json());
app.use(cors());
var clients = {};

io.on("connection", (socket) => {
    console.log("connected");
    console.log(socket.id, "Has joined");
    // socket.on("/test", (msg) => {
    //     console.log(msg);
    // })
    socket.on("signin", (id) => {
        console.log("signin ", id);
        clients[id] = socket;
        console.log("clients ", clients);
    })
    socket.on("message", (msg) => {
        console.log("msg => ", msg);
        let targetId = msg.targetId;
        if (clients[targetId]) clients[targetId].emit("message", msg);
    })
});

server.listen(port, "0.0.0.0",() => {
    console.log("Server started at port ", port);
});

