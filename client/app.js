
const socket = io('ws://localhost:8080');

socket.on('message', text => {
    console.log("2");
    const el = document.createElement('li');
    el.innerHTML = text;
    document.querySelector('ul').appendChild(el)

});

document.querySelector('button').onclick = () => {
    console.log("1");
    const text = document.querySelector('input').value;
    socket.emit('message', text)
    
}