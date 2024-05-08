function imprimirValoresRepetidos(array) {
    let repetidos = {};
  
    for (let i = 0; i < array.length; i++) {
      if (repetidos[array[i]] === undefined) {
        repetidos[array[i]] = 1;
      } else {
        repetidos[array[i]]++;
      }
    }
  
    let valoresRepetidos = [];
  
    for (let key in repetidos) {
      if (repetidos[key] > 1) {
        valoresRepetidos.push(key);
      }
    }
  
    console.log(valoresRepetidos.join(", "));
  }
  
  let array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
  
 imprimirValoresRepetidos(array);