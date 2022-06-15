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
  // en este caso el espacio. Y que sea retornado
  return palabras.join(' ');

}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  //Usé la función .includes para saber si algo está incluido
  // en el array. Del resto usé de la misma
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
  // promedio. De esta manera  no hay error, primero sumamos cada elemento del array
  // y a eso le aplicamos la división. ---> fue escrito incialmente con el ejercicio
  //resuelto tal cual debajo, con la excepción de que promedio fue declarado con valor
  //inicial 0, es decir, promedio=0. 
  //Ahora, varios días después (quizá 12 días después), estudiando y comparando ejercicios
  //y cuestionandome los conocimientos, decidí simplemente declarar la variable promedio
  //y no asignarle valor. Y lo mejor de todo???? CORRE EL TEST, y así es que yo en
  //un parcial lo r esolviera. WUJU!

  var promedio
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

  //Primeramente, diseño un cajón para almacenar información que se
  //vaya encontrando en las líneas de código, una especie de historial.
  // En él, iremos metiendo cada elemento y comparándolos entre sí para ver quien es
  // el más grande en valor. Para eso, declaramos una variable numeromayor, ella es
  // el cajón del que hablamos... le asignamos el valor de numeros[0] ya que 
  // será el número mayor que primero vamos a encontrar, después
  // tendríamos que comparar el resto de los elementos.
  //Creo el bucle for, para ir recorriendo todos los elementos del array, ahora bien,
  //¿por qué lo incio i=1? Porque ya hablamos sobre el elemento en la posición
  //0 del array, ya dijímos que es el número mayor hasta que se desmuestre
  //lo contrario, no tenemos con quien compraralo hasta no recorrer el array.
  //Por lo tanto, no lo compararemos con el mismo, sino con el que le sigue, así que
  // por eso lo inicio en 1. En el condicional if, uso numeros[i] para hablar sobre
  //todos los elementos del array, de la posición 1 en adelante que vamos
  // a comparar. Y usé numeromayor porque es el cajón en donde se estará quedando 
  //el número más grande que se vaya encontrando, inicialmente es numeros[0], pero
  //se han ido comparando con los otros valores gracias al for, y no sabemos
  //sí ya otro elemento lo sustituyó. En fin, sí esa condicion if se cumple,
  //debo de indicar lo que quiero que pase, quiero que cuando ese número sea encontrado,
  // quiero que se quede con el apodo de ser numeromayor, no quiero que la info sea
  // desvanecida (que se encuentre el número mayor y lo dejemos ir), quiero
  // que se quede aquí y se retorne, pero para retornar algo, debo de tenerlo
  // de mantenerlo allí, no puedo dejar que se me vaya, es por eso que
  // numeromayor = numero[i] con eso lo sello, para luego mandar a retornar dicho cajón listo.

    var numeromayor  = numeros[0]
  for(var i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeromayor) {
      numeromayor = numeros[i]
    } 
  } return numeromayor;

}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
 if(arguments.length < 1) {
   return 0;
 } if(arguments.length === 1) {
   return arguments[0];
 } else if(arguments.length > 1) {
   var multiplicacion = arguments[0]
   for(i = 1; i < arguments.length; i++) {
    multiplicacion = multiplicacion * arguments[i];
   } return multiplicacion;
  }



} // Sí la longitud del array arguments es menor a 1, pues debe de devolver 0, esto está simple.
// Sí la longitud del array arguments es igual a 1, como sólo estaría el elemento en la posición
//[0], ese es el que pedímos que sea devuelto. Ahora bien, sí la longitud del array arguments
// es mayor a 1 ¿Qué pasa? (else if --- a final de la cadena de códigos)... 
//Sí o sí, como hay más de 1 elemento, todos los elementos se van a tener que
//multiplicar por el elemento en el lugar [0], así que declaro la variable "multiplicación"
//y le asigno el valor del elemento [0] ya que sí o sí va a multiplicar al resto de los
//elementos. Luego, uso el loop for para recorrer el array, y lo inicio desde i=1
//ya que arguments[0] ya lo mencioné en la declaración de variables, y no tiene
//sentido volver a multiplicar [0] por él mismo. Luego, en el proceso del bucle, lo que indíco es,
//que la "multiplicación" va a ser igual (=) a "multiplicación" (nuevamente, es como la abreviación de +=,
//sólo que no puedo usarla abreviada ya que después está otro operador matemático(*) ésto es para
//que se vaya almacenando la info, y no desaparezca en cada multiplicación [i]),
// por (*) cada elemento del array (arguments[i]).


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
var contador = 0;
for(i = 0; i < arreglo.length; i++) {
  if(arreglo[i] > 18) {
    contador += 1;
  } 
} return contador;
} //Contador es una variable que se va a ir incrementando a medida que vaya encontrando elementos
//mayores a 18. Los encuentra gracias al loop for que recorre desde la posición [0] hasta el último
//elemento del array. Inicialmente el contador es 0 porque no hemos podido contar los elementos aún.
// contador+=1 es lo mismo que decir contador = contador + 1. Es para ir almacenando la info/cantidad de elementos
// mayores a 18 encontrados, y que se vayan sumando 1 a 1.


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 7 || numeroDeDia === 1) {
    return "Es fin de semana";
  } else {
    return "Es dia Laboral";
  }
} //Como los días NO laborales son sólo 2, se me hace más fácil usar el operador lógico OR para
// indicar que si el valor ingresado es alguno de esos 2 números, entonces es fin de semana. Y ya
// por descarte, indico que sino (else) es un día laboral.


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var num = n.toString()
  if(num.charAt(0) === "9") {
    return true;
  } else {
    return false;
  }
  
}
//Primero, como conozco la función .charAt() y sé que me retorna el elemento en
//la posición index que le dé como argumento, voy a transformar en número n dado
//hacia un string. Y pasamos de num entero a string con la función . toString()
// Ese nuevo valor se lo guardamos  auna variable nueva llamada num.
//Luego, con la condición, indico que si .charAt() del .toString() es igual a 9
//(el número que me piden), entonces es verdadero, sino, que retorne negativo.


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

  for(i = 1; i < arreglo.length; i++) {
    if(arreglo[0] === arreglo[i]) {
      return true;
    } else {
      return  false;
    }
  }
} // No necesito estar almacenando la info que se procesa porque me piden retornar
//un boolean , no alguna acumulación sino comparaciones entre todos, van pasando
//y los vamos descartando sí retorna true, para hasta que sea false. Fuese distinto
// sí  me pidiésen por ejemplo, el valor del número que se repite (que conforma al array)


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoarray = [];
  for(var i = 0; i < array.length; i++) {
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      nuevoarray.push(array[i]);
    }
  } if(nuevoarray.length < 3) {
    return "No se encontraron los meses pedidos";
  } return nuevoarray;
    }    
 
    //Declaro el nombre del array final donde se supone deben de estar
    //los 3 meses solicitados. Me piden los 3 meses si o si, sí alguno falta, ya debo de
    //retornar que no es posible. Luego con un for loop recorro el array e indico que si 
    //el elemento en la posición i del array dado es igual a alguno de esos meses, que
    //los vaya guardando en un array aparte. Ahora, luego de que se recorra todo el array,
    //le digo a la máquina que verifique cuántos elementos hay en dicho array final,
    //porque si es menor a 3 elementos quiere decir que faltó algún mes y debe de decir que
    //no se encontraron los meses. Sino, va a retornar dichoa rray con lo que tiene dentro. 

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  var losmayores = [];
  for(var i = 0; i < array.length; i++) {
    if(array[i] > 100) {
      losmayores.push(array[i])
      
    } 
  } return losmayores;
}
 //Declaro una variable para el array que me piden con los valores mayores a 100.
 //Luego recorro el array que me dan con un for loop. Indico la condición de que,
 //sí alguno de los elementos del array dado, es mayor a 100, ese elemento se pondrá/almacenará
 //de último en la variable del array que declaré al inicio.
 //Luego, indico que retorne dicho array final.

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  var arrayfinal = [];
  var suma = numero;
  for(var i = 0; i < 10; i++) {
    suma += 2;
    if(suma === i) break;
    else {arrayfinal.push(suma)};
  } if(i < 10) {
    return "Se interrumpió la ejecución";
  } else {
    return arrayfinal;
  }
  } //Declaro la variable del array que usaré al final, y la variable donde se irá sumando
  // cada valor (+2). Lo inicio NO con suma=0 ya que el valor inicial será el
  //número que se ingrese y a partir de allí se suma el resto.
  //Inicio el bucle for para contar las iteciones/número de veces a repetir una acción.
  //Máximo son 10 veces, como lo inciio desde i=0 ya esa sería la iteración #1 y así su-
  //cesivamente hasta llegar a i=9 que sería la iteración #10, allí se frena, por eso i<10.
  //"Tomo break" sí el condicional se cumple, sino, lo agrego al array.
  //Luego sí se tomó el break, quiere decir que las iteraciones NO llegaron
  //a completarse, es decir, es menor a 10. La diferencia entre i<10 en el for
  //y en el condicional if, es que para el for si queremos que se frene cuando
  // sea <10, es decir, que máximo sea 9... aquí hablo sobre las iteraciones contadas
  //desde el 0 inicial.
  //En cambio en el condicional if, lo que digo es que sí no se completaron las 10 iteraciones
  //(que es justo por lo que se tomó el break la función) entonces retorno que la ejecución
  //no funcionó. Sino, devuelvo el array que me piden. 



function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var arrayfinal = [];
  var suma = numero;
  for(var i = 0; i < 10; i++) {
    if(i===5) {
      continue;
    } else {
      suma +=2;
      arrayfinal.push(suma);
    } 
  } return arrayfinal;
} //Mismo principio del ejercicio anterior, la diferencia es que aviso dentro del for,
//de antemano que sí i===5 entonces tal tal, para que ya lo sepa eso antes de empezar a sumar.


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
