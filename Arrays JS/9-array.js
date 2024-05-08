function ordenarAlfabeticamente(cadena) {
    let soloLetras = cadena.replace(/[^a-zA-Z]/g, '');
  
    let caracteres = soloLetras.split('');
  
    let caracteresOrdenados = caracteres.sort(function(a, b) {
      return a.localeCompare(b);
    });
  
    let resultado = caracteresOrdenados.join('');
  
    return resultado;
  }
  
  let x = 'webmaster';
  let resultado = ordenarAlfabeticamente(x);
  console.log(resultado);
