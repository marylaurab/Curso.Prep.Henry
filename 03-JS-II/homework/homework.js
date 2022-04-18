// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if (x > y) {
    return x;
  } else if (y > x) {
    return y;
  } else {
    return x || y;
  }
} // Así lo hice más apegado al enunciado, más paso a paso.
// Al principio lo había hecho más directo:
// if (x>y) else { return x;
// } else { return y;
//} Y esto devolvería x en caso de ser mayor
// y si salía falso pasaría a correr el siguiente
//código que daría y en caso de ser mayor, y
// en caso de ser iguales devolvería y que es lo mismo que x.

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  if(edad >= 18) {
    return 'Allowed';
  } else {
    return 'Not allowed';
  }
} //Edad es el cajoncíto donde se permíte meter
//la info a evaluar. Tu diseñas el cajón
//y el usuario ingresa lo que el desee
//a mi me toca programar de manera tal que 
//se pueda evaluar sí lo que está dentro
//de dicho cajón es aceptable bajo mis condiciones o no.

function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  if(status === 1) {
    return 'Online';
  } else if (status === 2) {
    return 'Away';
  } else {
    return 'Offline';
  }
} // else if es como un if pero exíste luego de algún
//if prinipal anterior. Como me indicaban que el status
// se evaluaba según un valor numérico ingresado,
// puse el 'triple igual' para que el programa
// analice el tipo de dato ingresado. PERO coloqué
//doble igual y también me corrió bien el test
//¿Por qué?

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  if(idioma == 'aleman') {
    return 'Guten Tag!';
  } else if (idioma == 'mandarin') {
    return 'Ni Hao!';
  } else if (idioma == 'ingles') {
    return 'Hello!';
  } else {
    return 'Hola!';
  }
} //Primeramente había hecho el test igual pero
//sin colocar como strig a cada idioma, es decir,
//me quedaban en azulíto como la palabra idioma.
//Aún no sé porqué tenían que ser strings

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  
}

function esDiezOCinco(numero) {
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
    if ((numero === 10) || (numero === 5)) {
      return true;
    } else {
      return false;
    }
  } //Misma duda acerca de los dobles iguales o los triples
  //Sí la variable numero está descrita como
  //un valor numérico debería de yo colocar 
  //los iguales estrictos, es decir, el triple.
  //PD: nótese que cumple con la teoría. Sólo se niega
  //sí ambas expresiones son falsas, sino
  //es verdadera.

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero < 50 && numero > 20) {
    return true;
  } else {
    return false;
  }
} //PD: Nótese que cumple con la teoría,
//es true sí ambas son verdaderas.
//De la contrario, es false.

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:

}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if (numero % 3 === 0 && numero % 5 === 0) {
    return 'fizzbuzz';
  } else if (numero % 3 === 0) {
    return 'fizz';
  } else if (numero % 5 === 0) {
    return 'buzz';
  } else {
    return numero;
  }
} // Coloqué el operador lógico && de primero para que al dar true el código pueda correr y cumplir con lo
// que me piden. Porque de lo contrario, podría pasar que el número sea divisible entre 3 y 5 pero
// sí yo coloqué num%3===0 en el primer bloque, el test ya tomaría como verdadero que es divisible entre 3
// e ignoraría que también es divisible por 5, y no cumpliría con el enunciado. De hecho cambié el orden
// de los bloques de código a ver si afectaba y si, afectaba y no pasaba los test completos.
// Fallaron justo en donde dije en mi conclusión.

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  var num33
  if(num1 < 0 || num2 < 0 || num3 < 0) {
    return 'Hay negativos';
  }
  if(num1 === 0 || num2 === 0 || num3 === 0) {
    return 'Error';
  }
else if(num1 > num2 && num1 > num3 && num1 > 0) {
  return 'Número 1 es mayor y positivo';
} 
else if(num3 > num1 && num3 > num2) {
  return num33 = num3 + 1;
} else {
  return false;
}
} // Coloqué como primer bloque el de Hay negativos porque sin importar que alguno sea 0, sí alguno
// es negativo, el programa corre algo según el enunciado. Ya después si puedo exigír que
// de error para algún 0 que te encuentre, esto sería como sí no corriera el programa a pesar
// de que si está corriendo algo. Declaré una nueva variable para que sea el valor de num3 sumado 1. Ya que
// no super cómo hacerla con =+

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  // Test
  if (numero < 2) {
    return false;
  } if (numero === 2) {
    return true;
  } for(i = 2 ; i < numero ; i++) {
    if(numero % i === 0) {
      return false;
    }
  } return true;
} // Los números menores que 2 no son primos (Son negativos, 0 y 1). Por otro lado,
// Coloqué a 2 directamente en el primer if porque para el loop for la condición incial 
// es justo con ese valor (2) y en la condición final i jamás será igual a número
// entonces, el valor 2 quedaría fuera del loop, por lo tanto debo de
// colocarlo en otro lado. También inicié el loop en el valor 2 porque 
// el statement dentro del loop es una división, y ningún número es divisible
// por cero, y todos los números son divisibles por uno.
// Así que con uno me daría error y con el otro no me funcionaría
// como filtro para descartar los números que no cumplan con lo que busco.
// Return true lo puse al final porque de no correr ninguno de los bloques
// anteriores, llegará directamente allí.

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if(valor === true) {
    return 'Soy verdadero';
  } else {
    return 'Soy falso';
  }
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí
  var tabla = []     
 for(i=0 ; i < 11 ; i++) {
   tabla.push(6 * i)
 }
 return tabla;
} // Declaro un array con los corchetes. Como me piden la tabla desde el cero al diez, inicio
// el loop en cero y que finalice antes de llegar a 11, es decir, en 10.
// Apliqué la función push para que cada valor calculado se vaya arrojando 
// uno detrás del otro como una tabla.

function tieneTresDigitos(numero){
  //Leer un número entero y determinar si tiene 3 dígitos.
  //Escribe tu código aquí
 
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
