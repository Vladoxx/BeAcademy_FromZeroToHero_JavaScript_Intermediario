// Prototypes
function Pessoa (nome, idade, peso) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
}

const pessoa1 = new Pessoa('Marcelo', 44, 80);
const pessoa2 = new Pessoa('Wlad', 36, 85);
const pessoa3 = new Pessoa('T-Rex', 15, 6753);

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);

console.log(Pessoa.prototype);

const notebook = {
    cor: 'preta',
    ano: 2022,
    specifications: function(value) {
        return `Ese notebook custa R$${value},00; cor ${this.cor}; ano ${this.ano}.`
    }
}

console.log(notebook);
console.log(notebook.cor);
console.log(notebook.ano);

const dell = {
    marca: 'Dell'
}

const macBook = {
    marca: 'MacBook'
}

Object.setPrototypeOf(dell, notebook);
Object.setPrototypeOf(macBook, notebook);

console.log(dell.specifications(5000));

console.log(dell);
console.log(dell.cor);
console.log(dell.ano);

console.log(dell.specifications(5000));
console.log(macBook.specifications(20000));