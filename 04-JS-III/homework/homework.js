// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
} // Cada elemento dentro de un array, lleva una posición
// y dicha posición, se identifica con un índice. El primer
// índice es 0, luego 1, 2, 3,..., n posiciones.
// Escríbo el nombre del array y en brackets ó 
// corchetes, escribo el índice de la posción 
// del elemento que me solicitan.


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
} // Piénsalo como sí la función .length me diéra
// la cantidad de n elementos, OJO: NO posiciones. n ELEMENTOS
// y como soy inteligente, analizo que la última POSICIÓN
// del array SIEMEPRE será un número menor que la enésima
// ELEMENTO. Nótese que estamos comparando los n elementos, con las n posiciones.
// Sabiendo esto, sé que arrray.length me dará un número, un valor numérico,
// a ese número se le restará el valor nuérico 1, el cual puse
// ya de manera directa y constante. La resta de array.length - 1 es el argumento
// del llamado del array.


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
} // acá no uso corchetes/brackets ya que 
// no necesito llamar a ninguna posición del array, sino el largo del array.
// Dentro de [] es invocar algo del array, y aplicarle .funcion al array 
// sería que nosotros le hiciéramos algo al array, en este caso
// sería como medir el array, "y decir su longitud"
// RECORDAR: Hay un número n-posiciones y n-elementos. 


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  // Para asignarle algo a cada n-elemento dentro del array,
  // convoco un bucle for que recorra del array por cada posición
  // y a su vez, asigne determinado valor a cada uno, en coherencia 
  // entre sí.
  // A las n-psiciones los llamaré i, entonces tenemos: desde la
  //posición cero, hasta la posición de índice n-1 = array.length - 1,
  // lo que es igual a i < array.length. Almaceno todo en un nuevo array
  // para n modificar el array original. Además, tengo que ir acomodando
  // cada valor retornado, sin que se vaya. Dentro del argumento coloqué
  // que para cada valor de identidad de los elementos en posiciones i, se le sume
  // 1, y el push me va ordennado cada valor en la matruz nueva.
  var arraynuevo = []
   for(var i=0; i < array.length; i++) {
     arraynuevo.push(array[i] + 1);
   } return arraynuevo;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  //El push me empuja el elemento hacia
  //el último puesto del array
  array.push(elemento)
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  // al array le aplico uno función para actuar sobre él, entonces dicha
  //función me coloca el elemento recibido en la primera
  //posición del array, luego, que sea retornado.

  array.unshift(elemento)
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
    
  //Utilízo la función .join y le agrego el separador que me piden, 
  // en este caso el espacio. Y qu sea retornado
  return palabras.join(' ');

}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  //Usé la función .includes para saber si algo está incluido
  // en el array. Del resto usé de lamisma
  //manera que siempre el statement if.
  // También pude utilizarlo como:
  // for (var i=0; i < array.length; i++)
  // if(array[i] === elemento) 
  //{return true} else { return false}  


  if (array.includes(elemento)) {
  return true;
} else {
  return false;
} }



function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  // Sí tengo que ir sumando cada elemento, es de lógica
  // que para eso necesito un "cajón" dónde guardaralas a medida
  //que avanzo, por eso,
  // declaro una variable. Además, tengo que hacer algo para que
  //el programa recorra cada elemento y sepa como sumarlo, usaré loop for.

  var sumando = 0;
  for(var i = 0; i < numeros.length; i++) {
    sumando += numeros[i]
  } return sumando;
  

}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  //Decído hacer un bucle for, ya que tengo que pasar por cada elemento
  //del array. El cálculo a pedir es fácil: sumar todos los elementos y dividirlos
  // entre la cantidad de elementos que hay. Guardaré en una variable todo lo
  // que se vaya sumando, tal cual al ejercicio anterior. Y otra variable para el calculo del
  // promedio. De esta manera  no hay error, primero sumamos cada ellemento del array
  // y a eso le aplicamos la división.

  var promedio = 0
  var suma = 0;
  for(var i = 0; i < resultadosTest.length; i++) {
    suma += resultadosTest[i];
    promedio = suma / resultadosTest.length;
  } return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  // Vamos a analizarlo desde el primer elemento que sí o sí exíste,
  // y comparamos el resto de los elementos contra ese... ya que ese es el número
  //más grande, o el resto lo es. Usamos un bucle
  // para poder pasar por cada elemento del array. Y la comparación de valores
  // o el condicional, le aplicaremos el if.

    var numeromayor
  for(var i = 0; i < numeros.length; i++) {
    if(numeros[0] < numeros[i]) {
      numeromayor = numeros[i];
    } return numeromayor;
  }
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
