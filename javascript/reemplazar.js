//Creamos la función para analizar el texto introducido
function AnalizarTexto(original, buscar, reemplazo) {

  //Creamos las variables
  var str = "",
  recordatorio = original,
  busqueda = buscar.toLowerCase(), 
  index;
  validacion = false;

  //Realizamos una comparación para verificar que los tres campos esten rellenados de forma correcta
  while ((index = recordatorio.toLowerCase().indexOf(busqueda)) !== -1) {
    str += recordatorio.substr(0, index) + reemplazo;
    recordatorio = recordatorio.substr(index + buscar.length);
    validacion = true
  }

  if (validacion == true) {
    return str + recordatorio;

    //Verificamos que los campos esten rellenados de formas correcta
  } else if (validacion == false) {
    alert("Los campos no están rellenados de forma correcta")
    x = document.getElementById("BuscarPalabra").value = "",
    y = document.getElementById("ReemplazarPalabra").value = "";
    return recordatorio.value = "" && x && y;
  }
}

//Creamos la función para reemplazar la palabra en el texto
function Reemplazar() {
  
  //Creamos las variables
  original = document.getElementById("texto").value || "",
  buscar = document.getElementById("BuscarPalabra").value || "",
  reemplazo = document.getElementById("ReemplazarPalabra").value || "",
  resultado = document.getElementById("texto");
  
  //Validamos que los campos estén llenos
  if (original && buscar && reemplazo) {
    resultado.value = AnalizarTexto(original, buscar, reemplazo);
  }
  else {
    alert("Es necesario rellenar todos los campos")
  }
}

//Creamos una función para limpiar los campos
function Limpiar() {
  document.getElementById("texto").value = "";
  document.getElementById("BuscarPalabra").value = "";
  document.getElementById("ReemplazarPalabra").value = "";
  document.getElementById("resultados").value = "";
  document.getElementById("resultados").style.background = "transparent";
  var text = document.getElementById("texto");
}