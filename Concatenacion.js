//concatenacion de cadenas 

var nombre = "carlos";
var apellido = "Cortes";

var nombreCompleto = nombre + ' ' + apellido
console.log(nombreCompleto)
console.log(typeof nombreCompleto);

//En JS se lee de izquierda a derecha si encuentra una cadena concatena como un String
nombre = apellido + 3 + 4;
console.log(nombre);

//Cuando se tiene una variable de tipo numero, primero se realiza la operación y luego contatena 
nombre = 4 + 5 + apellido;
console.log(nombre);

/*
Si se quiere concatenar un string con la suma de dos numeros, 
se debe utilizar parentesis recordando la prioridad de ejecucion
*/
nombre = apellido + (4+6);
console.log(nombre) 
