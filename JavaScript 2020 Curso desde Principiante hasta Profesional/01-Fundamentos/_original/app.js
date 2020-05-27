
/**************************************
 *  Lección de definición de Variables
 * ************************************/
/*var primerNombre = 'Grover';
console.log(primerNombre);

var edad = 34;
var sueldo = 1800.99;

console.log(edad);

var tieneTrabajo = false;
console.log(tieneTrabajo);

var puestoDeTrabajo;
console.log(puestoDeTrabajo);

tieneTrabajo = null;
console.log(tieneTrabajo);

var cajas;

// Conversión de tipos

var primerNombre, edad, sexo, esSoltero;
primerNombre = 'Grover';
edad = 34;
sexo = 'M';
esSoltero = false;

console.log('El nombre es:' + primerNombre + ', y su edad es:' + edad + ', ¿es soltero? ' + esSoltero);

edad = 'Veinte';
console.log(edad);*/

/************
 * Operadores - Matemáticos (+, -, *, /)
 

 var edadGrover, edadPablo, diferenciaEdad, sumaEdades, yearActual, yearGrover, yearPablo;

 edadGrover = 34;
 edadPablo = 28;
 yearActual = 2019;

 diferenciaEdad = edadGrover - edadPablo;
 sumaEdades = edadGrover + edadPablo;

 yearGrover = yearActual - edadGrover;
 yearPablo = yearActual - edadPablo;

 console.log(diferenciaEdad);
 console.log(sumaEdades);
 console.log("Año en que nació Grover:" + yearGrover);
 console.log("Año en que nació Pablo:" + yearPablo);
 console.log(yearActual * 5);
 console.log(yearActual / 2);

 //Operadores Lógicos

var mayorGrover = edadGrover == edadPablo;
console.log(mayorGrover);

//Operador typeof
console.log(typeof edadGrover);
console.log(typeof edadPablo);
console.log(mayorGrover);
console.log(typeof 'Grover es mayor que Pablo');

//Operadores Unarios Aritméticos
//++ Incremento
//-- Decremento

var edadCarmen = 18;
var edadMaria = 14;

//edadCarmen++;
console.log(edadCarmen++);
console.log(--edadCarmen);

//Operadores de asignación
//=
var a = 5;
var b = 18;

a += b;
a -= b;
a *= b;
a /= b;
var c;
c = a % b; //devuelve el residuo de una división.
a %= b;*/

////////////////////////////////
//Ejercicio de codificación 01.
///////////////////////////////

//Se tiene los siguientes datos:

var pesoLuis = 72;
var alturaLuis = 1.72;

var pesoCarlos = 89;
var alturaCarlos = 1.75;

/*Utilizar la siguiente formula para calcular el IMC (Índice de masa corporal) de Luis y de Carlos, 
  IMC es igual al peso dividido entre la altura al cuadrado, luego comparar e indicar si el IMC de Carlos 
  es superior al de Luis.*/
//Solucion:
var IMCLuis = pesoLuis / (alturaLuis * alturaLuis);
var IMCCarlos = pesoCarlos / (alturaCarlos * alturaCarlos);

var comparacion = IMCCarlos > IMCLuis;

console.log('IMC de Carlos:' + IMCCarlos);
console.log('IMC de Luis:' + IMCLuis);

console.log('¿El IMC de Carlos, es Superior al de Luis?:' + comparacion);