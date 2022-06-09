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
  switch (color) {
    case 'blue': 
    return 'This is blue';
    case 'red':
      return 'This is red';
      case 'green':
        return 'This is green';
        case 'orange':
          return 'This is orange';
          default:
            return 'Color not found';
  }
} // En el paréntesis del switch coloco el cajón de la variable
// que se va a recibir. En case coloco las opciones que las personas van a
// poder colocar para las cuales yo le daré cierta respuesta.
// El caso default es sí coloca alguna opción que yo no programé.

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
  if (Math.floor(numero) === numero) {
    return true;
  } else {
    return false;
  }
} // Sí el número redondeado sigue siendo igual al número
// que inicicalmente se metió, entonces es un entero. Porque
// la función Math.floor siempre dará un entero. Ya sea porque
// el programa recibe un entero y la función lo deja igual, o
// porque recibe un decimal y lo redondea, y al ser diferente al 
// número recibido inicialmente, quiere decir que fue un
// decimal el que se recibió. Conclusión: Sí la función
// tuvo que ejecutarse (Math.floor) entonces No es un entero.

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
  num33 = num3 + 1
  return num33;
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

// Otra manera de explicarlo y verdaderamente entendiéndolo: Imagina
// una recta real, del 1 incluído al menos infinito NO son primos y 
// los indíco como false. El número más cercano a evaluar sí es primo
// o no, es el 2, por lo tanto, lo utilizo como punto fronterizo al
// resto de los números que quedan por evaluar. Entonces, indico
// lo que el número es, o sea, es primo, coloco retornar true para él.
// Para el cajón de la variable (llamada número) debo de conseguir
// únicamente dos piezas que entren allí (divisible entre 1 y él mismo)
// Cualquier número es divisíble por 1, Pero, ¿Cómo indicamos la otra
// condición (pieza 2) que queremos? Pues, empiezo a meter todas las piezas
// que exísten en la tabla real (fuera de los seleccionados entre el 1 incluído
//y el menos infinito, del 2 en adelante) pero como no puedo ir metiendo
// pieza por pieza, utilizo una funcón que me ayude a agilizar ésto sin tener
// que hacerlo manualmente yo. Entonces utilizo el for loop. Indico cómo se
// escogerán dichas piezas, como quiero que sean todas y cada una de ellas, 
// empiezo desde el 2 y avanzo a una por una, incremento su valor de a uno y la llamo i.
// Y como la condición es que el cajón número sólo acepte ser dividído por
// 1 y él mismo, quiere decir que NO puede ser dividido por otros números.
// Por consiguiente, lo que realizo es una división entre número e i, en 
// otras palabras es decir: "Número dividido por cualquier número i, al cual
// ya le puse condición de cómo moverse", entonces, sí número es dividivo
// exacto (% 0) por dicho i, quiere decir que hay más de dos piezas que
// entran en el cajón7variable dada

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
 if(numero < 1000 && numero > 99) {
   return true;
 } return false;
} // El número debe de ser entre esos valores para que tengan 3 dígitos, sino tendrían menos
//o más de los dígitos solicitados. Por otro lado, en principio había utilizado numero.length===3 y no
//funcionó. No sé si es porque la función .length es para strings y número espera un valor numérico.

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  var nuevovalor = numero
  var i = 0
  do {
    nuevovalor += 5;
       i += 1;
  } while (i < 8) 
  return nuevovalor;
} // Caso contrario al loop for, en DoWhile pusímos la forma de aumento de la i
// dentro del código. Además, para ir almacenando el valor del numero recibido
// y lo que se le suma, asociamos la variable a recibir (numero) a otra variable
// (nuevovalor) para que el cero no sea parte de la suma, ya que ésta vez,
// el cero n funciona como pasa con i, que se cuenta y va hasta i < 8. Acaá
//sería como decir que inicialmente algo vale cero, cuando lo que en verdad necesitamos son 
// ls datos de num, 5, y el 8.


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
