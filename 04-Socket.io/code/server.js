const express = require('express');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/')); 
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.listen(port, function(){
    console.log("Listening on *:" + port);
})

io.on("connection", function(socket) {

  socket.on("user_join", function(data) {
      this.username = data;
      socket.broadcast.emit("user_join", data);
  });

  socket.on("chat_message", function(data) {
      data.username = this.username;
      socket.broadcast.emit("chat_message", data);
  });

  socket.on("disconnect", function(data) {
      socket.broadcast.emit("user_leave", this.username);
  });
});