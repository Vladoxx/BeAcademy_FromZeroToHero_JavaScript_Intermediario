// Classes
const Foo = function(x) {
    this.x = x
}

const foo = new Foo('x');

// console.log(foo);

class Book {
    constructor(title, year, author) {
        this.title = title;
        this.year = year;
        this.author = author;
    }
}

const domCasmurro = new Book('Dom Casmurro', 1899, 'Machado de Assis');
const harryPotter = new Book('Harry Potter', 1997, 'Rowling');

// console.log(domCasmurro);
// console.log(harryPotter);

let bookList = []

bookList.push(domCasmurro, harryPotter)
console.log(bookList);

class CopaDoMundo {
    constructor(country, year) {
        this.country = country;
        this.year = year;
    }

    showChampion(team) {
        return `A copa do ${this.country} foi disputada no ano de ${this.year} e o campeão foi ${team}.`
    }
}

const copa86 = new CopaDoMundo('Mexico', 1986);
const copa70 = new CopaDoMundo('Mexico', 1970);
const champion86 = copa86.showChampion('Argentina');
const champion70 = copa70.showChampion('Brasil');

console.log(champion86);
console.log(champion70);


// Herança
class Candidates {
    constructor(firstName, surName, cpf) {
        this.firstName = firstName;
        this.surName = surName;
        this,cpf = cpf;
    }
}

class Masc extends Candidates {
    constructor(firstName, surName, cpf, reservista) {
        super(firstName, surName, cpf)
        this.reservista = reservista;
    }
}

const candidate1 = new Masc('Marcelo', 'Vasques', 123456789, true); 
const candidate2 = new Candidates('Maria', 'Fulana', 456789123);

console.log(candidate1);
console.log(candidate2);
