
const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('message', (message) => {
        socket.emit('message', message ); 
    });
});

http.listen(8080, () => console.log('listening on http://localhost:8080') );


 