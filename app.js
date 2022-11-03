
const my_module = require('./mathlib');

console.log('Objeto:');
console.log(my_module());

console.log('Funciones del Objeto');
console.log('add:' + my_module().add(15,24));
console.log('multiply:' + my_module().multiply(15,24));
console.log('square:' + my_module().square(24));
console.log('random:' + my_module().random(15,24));
