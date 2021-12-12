//Creamos la función que va contar las palabras
function ContarPalabras() {
  
  //Creamos una variable
  var texto = document.getElementById('texto').value;
  
  //Validamos que la entrada no sea nula
  if (texto != "") {
    
    //Creamos una expresion regular
    var regex = /\w{1,}/gi;
    //Buscamos coincidencias 
    var temp = texto.match(regex);
    //Obtenemos el tamanio del arreglo
    var tamanio = temp.length;
    //Validamos la respuesta
    validacion = (tamanio == 1) ? " palabra" : " palabras";
    //Imprimimos el resultado
    document.getElementById('resultados').value = (tamanio + validacion);

  } else {
    //Mensaje en caso de que el campo de texto esté vacío
    alert("El campo de texto está vacío");
  };
}

//Creamos una función para limpiar el area de texto
function Limpiar() {
  document.getElementById("texto").value = "";
  document.getElementById("resultados").value = "";
}