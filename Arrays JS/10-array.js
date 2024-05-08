function convertirPrimeraLetraMayuscula(cadena) {
    let palabras = cadena.split(' ');
  
    var palabrasMayusculas = palabras.map(function(palabra) {
      return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    });
  
    let resultado = palabrasMayusculas.join(' ');
  
    return resultado;
  }
  
  let x = "prince of persia";
  let resultado = convertirPrimeraLetraMayuscula(x);
  console.log(resultado);
  