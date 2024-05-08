function numeroMasGrande (array) {
    let numeroGrande = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > numeroGrande) {
            numeroGrande = array[i];
        }
    }
    console.log(numeroGrande);
}
let numeros = [4, 8, 22, 50, 29, 23, 3, 81];
numeroMasGrande(numeros);