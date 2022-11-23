// Recursión
function countDown(number) {
    console.log(number);
    const newNumber = number - 1;

    if(newNumber > 0) {
        countDown(newNumber);
    }
}

countDown(30)


// Default parameters
function say(message = 'Oiiii') {
    console.log(message);
}

// say()
say('Hello')


// Closures
// Escopo léxico é o escopo onde a função foi definida



