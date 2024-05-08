function invertirNumero (numero) {
    let numInvertido = parseInt(numero.toString().split('').reverse().join(''));
    return numInvertido;
}
let x = 32443;
let numInvertido = invertirNumero(x);
console.log(numInvertido);