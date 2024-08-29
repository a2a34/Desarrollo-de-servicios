function esPalindromo(palabra) {
    const palabraLimpia = palabra.toLowerCase().replace(/[\W_]/g, '');
    const palabraInvertida = palabraLimpia.split('').reverse().join('');
    return palabraLimpia === palabraInvertida;
}

const palabra = "radar";
if (esPalindromo(palabra)) {
    console.log(`${palabra} es un palíndromo.`);
} else {
    console.log(`${palabra} no es un palíndromo.`);
}
