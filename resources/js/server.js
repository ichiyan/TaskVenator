const express =  require('express');
const app = express();
var http = require('http').Server(app);

var io = require('socket.io')(http, {
    cors: {origin: "http://127.0.0.1:8000"}
});

var Redis = require('ioredis');
var redis = new Redis();

var users = [];
var parties = [];


http.listen(8005, function () {
    console.log('Listening to port 8005');
});

redis.subscribe('party-message-channel', function(){
    console.log('subscribed to party message channel');
});

redis.on('message', function(channel, message){
    message = JSON.parse(message);
    // console.log(message);
    if(channel == 'party-message-channel'){
        let data = message.data.data;

        if(data.type == 2){
            io.to('party' + data.party_id).emit('partyMessage', data);
        }
    }
});

const addNewUser = (user_id, has_party,socket_id) => {
    !users.some((user) => user.user_id === user_id) && users.push({user_id, has_party, socket_id});
}

const removeUser = (socket_id) => {
    users = users.filter((user) => user.socket_id !== socket_id);
}

const getUser = (user_id) => {
    return users.find(user => user.user_id == user_id);
}

io.on('connection', function (socket) {

    // socket.on("user_connected", function (user_id, has_party){
    //     //users[user_id] = socket.id;
    //     // io.emit('updateUserStatus', users);
    //     addNewUser
    //     console.log("user " + user_id + " connected");
    // });

    socket.on("user_connected", (user) => {
        addNewUser(user.user_id, user.has_party, socket.id);
        console.log("user " + user.user_id + " connected");
        console.log("USERS:");
        console.log(users);
    });

    socket.on("send_join_party_request", ({sender_id, receiver_id}) => {
        const receiver = getUser(receiver_id);
        console.log(receiver)
        io.to(receiver.socket_id).emit("get_request", {
            sender_id: sender_id,
        })
        console.log("join party request sent from " + sender_id + " to " + receiver_id)
    })

    socket.on("notify_acceptance", ({receiver_id, party_id}) => {
        console.log(receiver_id + " has been notified of party acceptance")
        const receiver = getUser(receiver_id);
        io.to(receiver.socket_id).emit("update_header", {
            party_id: party_id,
        })
        // console.log(receiver_id + " has been notified of party acceptance")
    })

    socket.on("update_online_status", function(){
        //   console.log("online status updated")
        //   io.emit('updateUserStatus', users);
    });

    socket.on("disconnect", () => {
        removeUser(socket.id);
    });

    //update
    // socket.on('disconnect', function () {
    //     var i = users.indexOf(socket.id);
    //     users.splice(i, 1, 0);
    //     io.emit('updateUserStatus', users);
    //     console.log("user " + i + " disconnected");
    // });

    socket.on('party_chat', function(data){
        data['socket_id'] = socket.id;
        if (parties[data.party_id]){
            console.log('party already exists');
            var isUserExisting = checkIfUserExists(data.user_id, data.party_id);
            if(!isUserExisting){
                parties[data.party_id].push(data);
                console.log("joining room: " + data.chat_room);
                socket.join(data.chat_room);
            }else{
                var index = parties[data.party_id].map(function(o) {
                    return o.user_id;
                }).indexOf(data.user_id);

                parties[data.party_id].splice(index, 1);
                parties[data.party_id].push(data);
                socket.join(data.chat_room);
            }
        }else{
            console.log('adding new party');
            parties[data.party_id] = [data];
        }
    });

});

function checkIfUserExists(user_id, party_id){
    var party = parties[party_id];
    console.log(party);
    var existing = false;
    if(parties.length > 0){
        Object.keys(party).forEach( key => {
            if(party[key]['user_id'] == user_id && existing == false){
                existing = true;
            }
        });
    }

    return existing;
}
