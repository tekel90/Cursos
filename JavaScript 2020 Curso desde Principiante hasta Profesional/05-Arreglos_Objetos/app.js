/****************************
 * Arreglos en JavaScript
 */

/* var nombre = ['Pablo', 'Carlos', 'Ana', 'Teresa'];
var vegetales  = new Array('Tomate', 'Lechuga', 'Zanahoria');

console.log(nombre[2]);
console.log(vegetales[1]);

nombre[1] = 'Jose';
console.log(nombre[1]);
vegetales[2] = 'Nabo';
console.log(vegetales[2]);

console.log(nombre.length); */

/*****************************
 * Operaciones con arreglos
 */

/* var frutas = ['pera', 'manzana', 'uva', 'sandia'];
console.log(frutas); */

/* for(var i=0; i<=frutas.length - 1;i++){
    console.log(frutas[i]);
} */

/* frutas.forEach(function(elemento, indice, array){
    console.log(elemento, indice);
}); */

/* frutas.push('naranja'); // agrego elemento al final
console.log(frutas);
frutas.unshift('frutilla'); // agrego un elemento al principio
console.log(frutas);
frutas.pop();// elimina el ultimo elemento del array
console.log(frutas);
frutas.shift();// elminia el primer elemento del array
console.log(frutas);

var pos = frutas.indexOf('uva'); // me guarda el valor de la posicion en el array
console.log(pos);

frutas.splice(1,2);
console.log(frutas); */

/*****************
 * arreglo con elementos de diferentes tipos
 */

/* var persona = ['Joni', 'Tekel', 29, '999999', 1.78];
console.log(persona); */

/***************
 * objetos literales
 */

/* var persona = {
    nombre: 'Joni',
    apellido: 'Tekel',
    gustos: ['futbol', 'peliculas', 'ingles'],
    trabajo: 'ninguno',
    esCasado: false
};

console.log(persona.apellido);
console.log(persona['trabajo']);

persona.esCasado = true;
console.log(persona.esCasado); */

/*****************
 * objetos con la sitaxis Object
 */

/* var persona2 = new Object();
persona2.nombre = 'Ana';
persona2.apellido = 'Pinedo';
persona2['trabajo'] = 'webdeveloper';

console.log(persona2); */

/************
 * objetos y metodos
 */

/* var persona = {
    //Propiedades
    nombre: 'Joni',
    apellido: 'Tekel',
    gustos: ['futbol', 'peliculas', 'ingles'],
    trabajo: 'ninguno',
    esCasado: false,
    yearNacimiento: 1990,
    
    //metodos
    calcularEdad: function(){
        this.edad = 2020 - this.yearNacimiento;
    }
};

persona.calcularEdad();
console.log(persona);
 */

 