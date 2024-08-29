let numeros = [10, 20, 30, 40, 50];

let suma = numeros.reduce(function(acumulador, valorActual) {
    return acumulador + valorActual;
}, 0);

console.log("La suma de los elementos del arreglo es:", suma);
