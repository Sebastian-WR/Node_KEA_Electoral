const express = require("express");
const app = express();

const server = require("http").createServer(app); // wrapping express app with http module create server

const io = require("socket.io")(server); // global namespace

io.on("connection", (socket) => {
    // console.log("A socket connected with id", socket.id); // logs this when a socket connects
    socket.on("colorChanged", (data) => {
        socket.emit("changeBackgroundToThisColor", data); // changers the color only for the socket 
        //socket.io("changeBackgroundToThisColor", data);//if io.emit instead in changes for all sockets
        //socket.broadcast.emit("changeBackgroundToThisColor", data); // sends to all sockets but itself, so changes color on all
    });
}); // when a socket copnnects to our server socket a connection event has been filed

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/colors.html");
})

server.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});