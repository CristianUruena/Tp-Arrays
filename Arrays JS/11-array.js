function buscarPalabraMasLarga(frase) {
    let palabras = frase.split(' ');
  
    let palabraMasLarga = '';
  
    for (let i = 0; i < palabras.length; i++) {
      let palabra = palabras[i];
  
      if (palabra.length > palabraMasLarga.length) {
        palabraMasLarga = palabra;
      }
    }
  
    return palabraMasLarga;
  }
  
  let x = "Tutorial de Desarrollo Web";
  let resultado = buscarPalabraMasLarga(x);
  console.log(resultado);
  