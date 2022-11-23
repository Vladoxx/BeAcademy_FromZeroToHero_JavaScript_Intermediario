// Funções de Callback
function hello(name) {
    console.log(name);
}

// hello('Wlad')

function helloUser(callback) {
    callback('Wlad')
}

// helloUser(hello);
// console.log(helloUser(hello));


const callback = e => alert('Foi clicado')

window.addEventListener('click', callback)