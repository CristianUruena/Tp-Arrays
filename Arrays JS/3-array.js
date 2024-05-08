function numeroMasBajo (array) {
    let numeroBajo = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < numeroBajo) {
            numeroBajo = array[i];
        }
    }
    console.log(numeroBajo);
}
let numeros = [4, 8, 22, 50, 29, 23, 3];
numeroMasBajo(numeros);