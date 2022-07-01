// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre[0].toUpperCase() + nombre.slice(1);

} //Accedo al elemento en la posición cero, haciéndolo con llamado de corchetes común. 
//Luego se le aplica el método .toUpperCase de sólo esa letra, y se le une 
//el resto con el método .slice, donde le invoco el índice a partir del cual
//va a tomar en cuenta hacia el final.

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
} //Como sé que cb es una función, y aquí si me mandan a invocarla "manualmente", 
//entonces la invoco como una función común.

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2);
  //La función que nos dan es la que comentan que hace una operación matemática en su callback
  //con la ayuda de 2 números ingresados. Como ya sabemos, el cb y la función que la usa, están
  //muy relacionadas y buscan solucionar lo mismo. Por lo tanto, retorno el nombre del callback
  //para invocarlo, y le paso sus paramétros, los cuales serán "los mismos" que la función
  //que los usa.
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  
  var suma = numeros.reduce(function(prev,curr) {
    return  prev + curr;
  }, 0);
  cb(suma);
} //Lo pude haber hecho de manera impírica, que es armar el for loop desde cero
//y declarar la variable suma desde 0 e ir sumando cada elemento allí dentro. PERO como
//la clase es de métodos de orden superior (métodos de funciones callback) y de callback, lo 
//traté de hacer de esa manera.
//Declaro el nombre de la función que en este caso quise que fuese "suma", luego le asigno
//el valor y la armo con .reduce() y sigo su estructura. Llamo al array numeros, le aplico
//el método, y en paréntesis lo que me indica la syntax del método. (Numero previo, numero
//que le sigue, la operación a realizar, y el valor de inicializacion). Después para
//asignicar callback, la misma manera de siempre sin retornar nada. cb(parámetroquelaotrafunción
//megenera).

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
 array.forEach(cb);
} //Como ya sabemos, .forEach es un bucle for sólo que ya construído, y lo usamos como método.
//Así que el ya por sí sólo va a iterar soobre cada elemento en la posición index del array. 
//Cuando nos dicen "pasa los valores al cb" como ya vimos, no es declarandolo sino como invocandolo
//o enlazándolos, el parámetro que tiene con asociación con la otra función.
//Además .forEach itera funciones, y como cb ees una función, con más razón
//hacer lo anteriormente dicho. 

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var NuevoArray = array.map(function(item) {
   return cb(item);
  }); return NuevoArray;
} //También podía hacerlo de manera impírica pero estoy usando los métodos de orden superior.
//Entonces, .map ya sé que me da un array con la misma cantidad de lementos  y con cada elemento
//alterado igual al los demás, es como un patrón para todos.
//Hago tal cual la syntax de .map... Como estos métodos so de orden superior

//parece que no les declaro practicamente nada y ellos hacen el resto. 
//Lo que quieren es que cada elemento sea "metida" en la función cb, y allí dará un
//valor nuevo sin conocer, y ese valor desconocido es le que se irá al nuevo array
//y luego es retornado. Entonces cb(item) es como cada item invocado al cb.


function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var NuevoArray = array.filter(function(string) {
    return string.charAt(0) === "a";
  }); return NuevoArray;
} //Uso la syntax de .filter. Llamo al nuevo array, después
//indico lo que voy a filtrar. .charAt es para acceder al index que paso
//como parámetro de una string. Entonces el primer elemento de la string, sí es 
//idéntico a "a" entonces ya es filtrado y retorna el nuevo array;

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
