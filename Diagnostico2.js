function revertirFrase(frase) {
    return frase.split(' ').reverse().join(' ');
}

const frase = "Hola, ¿cómo estás?";
const fraseInvertida = revertirFrase(frase);
console.log("Frase invertida:", fraseInvertida);
