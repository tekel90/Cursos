/***************************************
 * Leccion de definicion de variables
 ***************************************/

 // Alt + Shift + A comenta todo

 /*var primerNombre = 'Teku';
//console.log(primerNombre);
var edad = 34;
var sueldo = 40000.50;

console.log(edad);

var tieneTrabajo = true;
console.log(tieneTrabajo);

/*var puestoDeTrabajo;
console.log(puestoDeTrabajo);

tieneTrabajo = null;
console.log(tieneTrabajo);*/

/***************************************
 * Conversion de tipos
 ***************************************/

/* var primerNombr, edad, sexo, esSoltero;
primerNombr ='Teku';
edad = 29;
sexo = 'M';
esSoltero = false;
console.log('El nombre es: ' + primerNombr + ', y su edad es: ' + edad + ' ¿Es soltero? ' + esSoltero);

edad  = 'Veinte';
console.log(edad); */

/*****************************************
* Operadores - Matematicos (+, -, *, /)
******************************************/

/* var edadTeku, edadJoni;
edadJoni = 29
edadTeku = 25;
anioActual = 2019;

diferenciaEdad  = edadJoni - edadTeku;
sumaEdades = edadJoni + edadTeku;

yearTeku = anioActual - edadTeku;
yearJoni = anioActual - edadJoni;

console.log(diferenciaEdad);
console.log(sumaEdades)
console.log("año en que nacion Teku: " + yearTeku);
console.log("año en que nacion Teku: " + yearJoni);

console.log(anioActual * 5);
console.log(anioActual / 2);

/*****************************************
* Operadores Logicos
******************************************/

/* var mayorTeku = edadJoni == edadTeku;
console.log(mayorTeku);

/*****************************************
* Operadores Typeof
******************************************/

/* console.log(typeof edadTeku); */

/*****************************************
* Operadores de asignacion
******************************************/

/* var a = 5;
var b = 18;

a = a +  b;
a+=b; */

/*****************************************
*Ejercicio 1
******************************************/
//datos
var pesoLuis = 72;
var alturaLuis = 1.72;

var pesoCarlos = 89;
var alturaCarlos = 1.75;

// formula del IMC
//IMC = al peso dividido entre la altura al cuadrado
//comparar imc

var imcLuis = pesoLuis / (alturaLuis * alturaLuis);
var imcCarlos = pesoCarlos / (alturaCarlos * alturaCarlos);

var imcSuperior = imcCarlos > imcLuis;

console.log("IMC de Carlos es: " + imcCarlos);
console.log("IMC de Luis es: " + imcLuis);

console.log("El IMC de Carlos es superior al de Luis?: " + imcSuperior);
