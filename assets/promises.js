// Teste SetTimeout
setTimeout(() => {
    console.log('resposta')
}, 2000);


// Promises
function show() {
    setTimeout(() => {
        console.log('Oi');
    }, 2000)

    console.log('Até logo');
}

show()

const minhaPromise = new Promise((resolve, reject) => {
    let n = 9;
    if(n > 10) {
        resolve();
    } else {
        reject();
    }
})

minhaPromise.then(result => console.log('resolveu'))
.catch(err => console.log('errou'))
.finally(() => console.log('Finally!'))

// async-await -- Promises
const firstUser = async(userId) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
    let resultJSON = await response.json()
    // let data = resultJSON.title
    console.log(resultJSON)
}

firstUser(1)