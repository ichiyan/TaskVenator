var app = require('express')();
var http = require('http').Server(app);

var io = require('socket.io')(http, {
    cors: {origin: "http://127.0.0.1:8000"}
});

var users = [];

http.listen(8005, function () {
    console.log('Listening to port 8005');
})

io.on('connection', function (socket) {
    // console.log("someone connected at socket id " + socket.id);
    socket.on("user_connected", function (user_id){
        users[user_id] = socket.id;
        io.emit('updateUserStatus', users);
        console.log("user connected " + user_id);
    });
});
