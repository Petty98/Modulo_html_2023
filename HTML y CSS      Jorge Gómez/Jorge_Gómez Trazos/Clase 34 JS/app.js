// Comentario



/*

Comentario II

*/




// Mostrar en la consola del navegador los textos o las variables que le pongamos.

// Los datos que definimos con "" son cadenas de texto        -> STRING

console.log("Hola mundo JS");

console.log('Segunda línea de código');


// Definimos una variable conla palabra let

let nombre = "Jorge";

console.log("El valor de la variable nombre es:");
console.log(nombre);


// Modificar el valor de una variable

nombre = "Pedro";

console.log("Nombre después de modificarlo");
console.log(nombre);


// NUMBER

let edad = 10;  

console.log("edad");
console.log(edad);


// BOOLEAN

let mayorEdad = true; // Asigno con un =
let otromayorEdad = false;

console.log(mayorEdad)


// Sentencia de control -> IF ELSE
// Cuando es una pregunta: ===


// IF - ELSE sólo ejecuta UNA de las dos trozos de código

if(mayorEdad === true){ // Pregunta
    console.log("Eres mayor de edad");
}else{
    console.log("Eres un niñato");
}


// PRECIO

let precio = 20;
let gastos_envio = 0;

if(precio < 50){
    console.log("Sumar gastos de envío");
    gastos_envio = 5;
}else{
    console.log("Gastos de envío son 0");
}

let precio_total = precio + gastos_envio;

console.log("precio_total");
console.log(precio_total);