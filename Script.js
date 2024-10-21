console.log("JS Cargado");

let edad; // declaracion
edad = 18; //asignacion

let nombre ="juan"; // declarando y asignando
console.log("Mi nombre es " + nombre);
nombre=50;
console.log(nombre)
var apellidoPaterno = "De la cruz";
console.log("Mi apellido es " + apellidoPaterno);

var preferencia = "tacos";
if (true)
{
    var preferencia = "pizza";
    console.log(preferencia);
}

console.log(preferencia);

//var se utiliza para variables globales
//let se utiliza para variables locales que su alcance es limitado solo a un bloque de codigo.

const sexo = "F";

console.log(sexo);
//sexo ="M"; variables de tipo constante no permite la asignacion de nuevos valores // Script.js:28 Uncaught TypeError:
// Assignment to constant variable.  at Script.js:28:6
console.log(sexo);

let template = `mi nombre es ${nombre} y
                mi epellido es ${apellidoPaterno}
                mi edad es de ${edad}`

console.log (template);