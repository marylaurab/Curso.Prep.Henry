// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Lia Caroni es mi hija"; // Mientras todo esté en comillas, puedo escribir cualquier texto dentro de el y será una string.

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = -6; //Pueden haber numeros positivos y negativos

// Crea una variable booleana:
const nuevoBool = true; //Tambien pudo haber sido false.

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1; // El modulo representa el resto en la división


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str; //Str es el cajoncíto donde la persona coloca lo que quiere
  //y yo le di que retorne lo que se coloca dentro de ese cajón
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  return x + y; //También pude hacerla declarando una nueva
  //variable, por ejemplo: var suma1;
  // suma1 = x+y;
  // return suma1; por lo que entiendo, entonces
  //lo que esta dentro del parentesis como argumento
  // en una funcion dada, quiere decir que ya habilitaron
  // el cajoncíto a usar... como declarar
  // esa variable donde se almacenará la info.
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  return x - y;
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  return x * y;
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  return x / y;
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x === y) 
  {return true;
  } else {
    return false;
  }
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if (str1.length === str2.length) {
    return true;
  } else {
    return false;
  }
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num < 90) {
    return true;
  } else {
    return false;
  }
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num > 50) {
    return true;
  } else {
    return false;
  }
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  return (x % y);
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if ((num % 2) === 0) {
    return true;
  } else {
    return false;
  }
} // Cualquier número par es divisible por 2 y no queda
// resto alguno. Por lo tanto, diciendo que el resto es 0
// al dividirlo por 2, indico que es par.

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if ((num % 2) !== 0) {
    return true;
  } else {
    return false;
  }
} //Aqui negué el ejercicio anterior con !== ya que es justo lo contrario
//a lo que arriba pedían. Pero también pude haberlo hecho
// como: num % 2 === 1 entonces es true. Ya que
// todo número impar dividído por 2, deja un resto de valor 1.

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  return Math.pow(num , 2);
} //OJOOO: La función Math.loquesea arranca con la letra m en MAYÚSCULA.
// Había hecho este ejercicio idéntico pero sin la mayúscula y
// el test no me lo aprobaba.

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return Math.pow(num , 3);
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return Math.pow(num , exponent);
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  return Math.round(num);
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil(num);
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random();
  // Lo utilizo para hacer cosas aleatorias. Se puede modificar con una fórmula para
  //que me de valores distintos a 0 y 1 y que además, incluya los extremos.
} 

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero > 0) {
    return "Es positivo";
  } if (numero < 0) {
    return "Es negativo";
  } else {
    return false;
  }
} // El else va siempre después del if, sin importar que hayan varios if seguídos arriba.

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return str + "!"
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  return nombre + " " + apellido;
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return "Hola " + nombre + "!";
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  return alto * ancho;
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  return lado * 4;
} // pude haber sumado lado 4 veces: lado+lado+lado+lado


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  return (base * altura) / 2;

}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  return euro * 1.20;
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aqui
  if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
    return "Es vocal";
  } if (letra.length > 1) {
    return "Dato incorrecto";
  } else {
    return "Dato incorrecto";
  }
} // El programa verá si se convierte en true el primer if, si da true descarta el resto de los bloques
//de código, si ejecuta y sale false pasa al siguiente if... si sale true descarta el resto, si sale false
// se va al último bloque e indica true para q sea dato incorrecto.



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
