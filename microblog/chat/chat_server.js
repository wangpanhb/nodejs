/**
 * Created by wang on 2016/3/31.
 */
var socketio=require('socket.io');
var io;
var guestNumber=1;
var nickNames={};
var namesUsed=[];//存放使用了用户名
var currentRoom={};//存放使用了的房间名称


exports.listen=function(server){
    io=socketio.listen(server);
    io.set('log level',1);
    io.sockets.on('connection',function(socket){
        guestNumber=assignGuestName(socket,guestNumber,nickNames,namesUsed);
        joinRoom(socket,'Wang Pan');
    });
};

//用户连接上来时候赋予他一个访问名；
function assignGuestName(socket,guestNumber,nickNames,namesUsed){
    var name="用户"+guestNumber;
    nickNames[socket.id]=name;
    socket.emit('nameResult',{
        success:true,
        name:name
    });
    namesUsed.push(name);//将加入到聊天房间中的人的名字存入用过的名字里面；
    return guestNumber+1;
}

//添加房间名称,room为房间名称
function joinRoom(socket,room){
    socket.join(room);//直接加入进去
    currentRoom[socket.id]=room;
    socket.emit('joinResult',{room:room});
    socket.broadcast.to(room).emit('message',{
        text:nickNames[socket.id]+'has joined'+room+'.'
    });

    var usersInRoom=io.sockets.clients(room);
    if(usersInRoom.length>1){
        var usersInRoomSummary='Users currently in' + room +';';
    }
}