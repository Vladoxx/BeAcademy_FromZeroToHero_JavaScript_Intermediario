// rest caracters
function getSum(...args) {
    let total = 0
    for(const arg of args) {
        total += arg
    }
    return total
}

console.log(getSum(2, 5));

// spread operator
const arr = [1, 2, 3]
const arr2 = [...arr, 4]

console.log(arr2);

// merge arrays
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const mergeArrays = [...array1, ...array2]

console.log(mergeArrays);

// Destructuring
const carro = {
    marca: 'Fiat',
    ano: 2018,
    portas: 4
}

const marca =  carro.marca
const ano = carro.ano
// const {marca, ano} = carro

console.log(carro);
console.log(ano);

const cliente = {
    nome: 'Marcelo',
    compras: {
        digitais: {
            livros: ['Dom Casturro', 'O Cortiço'],
            filmes: ['Senhor do Anéis', 'Matrix']
        },
        fisicas: {
            cadernos: ['Caderno']
        }
    }
}

console.log(cliente.compras.digitais.livros);
console.log(cliente.compras.digitais.filmes);

const {livros, filmes} = cliente.compras.digitais

console.log(livros);
console.log(filmes);
