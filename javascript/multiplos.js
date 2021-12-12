function multiplos() {

    //Obtenemos el número que ha sido ingresado por el usuario
    multiplo = document.getElementById("Numero").value;
    if (multiplo == "") { alert("El campo está vacío"); }
  
    //Creamos las variables
    regex = /^\d*$/;
    numero = multiplo; 
    
    //Validamos que la entrada sea un numero
    if (regex.test(numero)) {
  
    } else {
      document.getElementById("Numero").value = "";
      alert('El número debe estar en el rango de 1 - 100'); 
      return false;
    }

    //Validamos que el número sea mayor a 0
    if (multiplo == "0") {
      document.getElementById("Numero").value = "";
      alert('El número debe ser mayor a 0'); 
      return false;
    }
  
    //Validamos que el número sea menor a 100
    if (multiplo > 100) {
      document.getElementById("Numero").value = "";
      alert('El número debe ser menor a 100'); 
      return false;
    }
  
    //Creamos un arreglo en donde vamos a guardar los números del 1 al 100
    numeros = [];
    
    //Obtenemos los números de la tabla
    tabla = document.getElementsByTagName("td");
    
    //Añadimos los elementos en el arreglo
    for (var i = 0; i < tabla.length; i++) {
      numeros.push(parseInt(tabla[i].innerHTML));
    }

    //Creamos una función para obtener los multiplos
    function multiple(valor, multiple) {
      resto = valor % multiple;
      if (resto == 0)
        return true;
      else
        return false;
    }

    //Creamos un arreglo que contendrá los números que son multiplos
    multiples = [];
    
    //Añadimos los números multiplos en el nuevo arreglo llamado multiples
    for (var i = 1; i <= tabla.length; i++) {
      if (multiple(i, multiplo))
        multiples.push(i);
    }
    
    //Comparamos los dos arreglos para saber cuales son los números que son multiplos
    for (var i = 0; i < numeros.length; i++) {
      for (var j = 0; j < numeros.length; j++) {
        if (numeros[i] == multiples[j])
          tabla[i].style.background = "red";
      }
    }
  
  }

  //Creamos una función para limpiar los campos
  function Limpiar() {
    document.getElementById("Numero").value = "";
    var tabla = document.getElementsByTagName("td");
    for (var i = 0; i < tabla.length; i++) {
      if (tabla[i].style.background = "read") {
        tabla[i].style.background = "transparent";
      }
    }
  
  }