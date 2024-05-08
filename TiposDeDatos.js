/*
Tipos de datos en 
javaScript
*/

//Tipo de dato String
var nombre = "carlos";
console.log(nombre);
//js tiene variables dinamicas 
nombre = 100;
//Tipeof para mirar el tipo de dato de la variable 
console.log(typeof nombre);
//Tipo de dato numero
var numero = 1000;
console.log(numero);

//Tipo de dato object
var objeto = {
    nombre : "yesid", 
    telefono : 12345,
    apellido : "cortes" 
}
console.log(objeto)

//Tipo de dato symbol 
var simbol = Symbol ("Yeyo");
console.log( typeof simbol)

//Tipo de dato undefined
var x;
console.log(typeof x);

//Tipo de dato funtion
function miFuncion(){}
console.log(typeof miFuncion);

//clases en javaScript son llamadas funciones
class Persona{
    constructor(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}}
  console.log(typeof Persona)  

//Tipo null object
var y = null;
console.log(typeof y)