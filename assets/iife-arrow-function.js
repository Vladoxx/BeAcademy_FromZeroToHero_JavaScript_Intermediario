// immediately Invoked function expression ou IIFE
/* (function helloWorld() {
    alert('Hello, World!');
}) ();

(function (message){
    alert(message);
}) ('Hello, World'); */

// Arrow Function
/* function sum (a) {
    return a + 100;
} */

const sum = a => a + 100;

console.log(sum(3));

// Exemplo com map()
const materials = [
    'Hydrogen',
    'Helium',
    'Lithum',
    'Beryllium'
];

// const newArray = materials.map(
//     function showLength(materials) {
//         return materials.length
//     }
// );

const newArray = materials.map(material => material.length);
console.log(newArray);