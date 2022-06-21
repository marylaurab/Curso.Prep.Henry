// No cambies los nombres de las funciones.

//¿QUÉ ES UN OBJETO?: En js lo es todo. Un objeto es una colección de propiedades sobre una 
//sola cosa.
//¿QUÉ SON LAS PROPIEDADES?: Son asociaciones entre un nombre y un valor.
//¿QUÉ ES UN MÉTODO?: Es una función dentro del objeto, aplicado como valor al
// key usado.
//BUCLE FOR... IN LOOP: Es la manera no estandar de recorrer. En este caso
//como ya habíamos aprendido a recorrer con los índices de posiciones,
//y en los objetos es por "títulos", debemos de recorrerlos como tal.
//DOT NOTATION & BRACKETS NOTATION: Ambas son válidas, una más fácil que otra.
//DOTNOTATION: objeto.propiedad vs BRACKETSNOTATION: objeto["Propiedad"]

function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  var obj = {
    nombre: nombre,
    edad: edad,
    meow: function() {
      return "Meow!";
    },
  }
  return obj;
  
} //Declaré el objeto que me solicitan, con llaves y la keyword "var".
//Dentro dejé los pares key: value.. Las famosas propiedades.
//La última propiedad es un método, ya que el valor es dado por una función.
// Le coloco su nombre, luego invoco e indico que es una función, y después
//escribo lo que necesíto que retorne. OJO: El return dentro del método, se va a salir
//de dicha función y sigue con lo que queda de objeto (en este caso no hay más pares).
//Al final, que retorne el objeto.



function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:

objeto[property] = null;
return objeto;
} // Leer bien el enunciado es la clave. Cuando me dicen que la propiedad de la que me hablan
// tiene como nombre el valor del argumento en la función inicial dada, lo que me quieren
//decir es que property es una variable, es decir, esa oración me narra lo siguiente:
// var property = "nombredelapropiedadquenosé";
//obj={
// nombredelapropiedadquenosé=null,
//}
//Por lo tanto, no puedo hacer lo que yo quería al inicio que era por dot notation,
//ya que lo toma literal, y al hacer objeto.property el buscará dentro del objeto 
//dicha propiedad y no la hay. Así mismo, ojo con el bracket notation, ya que 
//al ser una variable no debo de encerrar la palabra dentro de comillas como un 
//string, ya que la variable property no es un string que pertenece al objeto, más 
//si puede ubicarla como variables.

function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:

  

}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:

}

function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
}

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:

}

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
}



function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
}

function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:
}

function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:
}

function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:
}

function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
}

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
}

function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};
