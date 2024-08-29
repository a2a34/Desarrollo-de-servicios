let numeros = [10, 25, 30, 5, 40, 15];

let valorUsuario = 20;

let filtrados = numeros.filter(function(numero) {
    return numero > valorUsuario;
});

console.log(`Elementos mayores que ${valorUsuario}:`, filtrados);
