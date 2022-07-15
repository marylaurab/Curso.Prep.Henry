// No cambies los nombres de las funciones.
 


function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  function Usuario(opciones) {
    this.usuario = opciones.usuario;
    this.nombre = opciones.nombre;
    this.email = opciones.email;
    this.password = opciones.password;
  }
  Usuario.prototype.saludar = function() {
    return "Hola, mi nombre es " + this.nombre;
  };
  return Usuario;

}
//Me piden diseñar la famosa "plantilla"/clase. Para eso, necesito "de dos partes", 1. la función
//constructora,que es la que me va a determinar las propiedades que van a tener cada isntancia según
//los datos que se hayan almacenado en opciones. Y por otro lado, tendremos en "el papá de usuario"
//los métodos que va a poseer. Declaramos una clase de la manera literal la cual recibe como
//argumento, un objeto que trae almacenado la información proporcionada para trabajar. Sino,
//tuviéramos que poner en el argumento manualmente (yo) la variable nombre, email, usuario, blabla.
//Así que nos lo ahorraron con un objeto. El statement de la función es: decir que para este usuario,
//cada variable será igual a... la variable equivalente que está en el objeto opciones. Luego,
//"Invoco" al proto de Usuario y le agrego el método. Lo declaro como una función común que
//retorna algo. En este caso retorna un mensaje, el nombre que se le asignó a usuario.
//Por último, retorno la clase. 

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
 Constructor.prototype.saludar = function () {
  return "Hello World!";
 };
}
//Constructor es la clase a la cual le vamos "a invocar" su prototype de la manera aprendida
//y agregarle el método saludar. La función saludar es creada como siempre, y retorna lo
//pedido.

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  String.prototype.reverse = function () {
    var NuevaString = "";
    for(var i = this.length - 1; i >= 0; i--) {
      NuevaString += this.charAt(i)
    };
  return NuevaString;
};
} 
//Convoco a agregar un método al prototipo de la clase que me indican, de la manera ya aprendida.
//Luego en el statement de la función, le aviso a la consola que una variable a recibir será un
//string. Luego inicio un bucle for de final a principio

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(nombre, apellido, edad, domicilio) {
      this.nombre = nombre,
      this.apellido = apellido,
      this.edad = edad,
      this.domicilio = domicilio
    }
    detalle() {
      return {
       Nombre: this.nombre,
      Apellido: this.apellido,
    Edad: this.edad,
  Domicilio: this.domicilio}
    };
} //Con ES6 creé una nueva clase llamada Persona. Uso el keyword class, después el constructor
//donde añado las propiedades. El statement quiere deci: "El nombre, apellido, bla bla de este
//usuario, será el dato ingresado a la variable nombre, apellido, bla bla". Después añado
//una función(método) que me dirá el título de la propiedad y el valor correspondiente. (Esto
//no lo había entendido muy bien en el enunciado). Pero dice claramente que devuelve un objeto.

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  var Juan = new Persona(nombre,apellido,edad,dir)
  return Juan;
} //Instanciar significa ya darle más especificación a cada objeto dentro de la clase.
//Entonces declaro el nombre del nuevo usuario, uso wl keyword new, invoc la clase,
//añado los argumentos/variables donde viene la info a usar y luego lo retorno.
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"

  Persona.prototype.datos = function() {
    return this.nombre + ", " + this.edad + " años";
  }
}//Con el call común que conozco de prototype le asigno el método que me piden,
// armo la función como ya lo sé hacer y listo.
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
