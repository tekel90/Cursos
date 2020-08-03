/* function bienvenido(){
    return 'Hola Bienvenido a la seccion de funciones';
}

var mensaje = bienvenido();
console.log(mensaje); */


//partes de una funcion
//entradas(argumento), codigo, salida

/* function cuadradoNumero(num){
    var resultado = num * num;
    return resultado;
}

var numero = 3;
var valor = cuadradoNumero(numero)
console.log(valor);
console.log(cuadradoNumero(5)); */

// funcion que convierte de grados fahrenheit a celsius
// 32F = 0C, 68F = 20C
// C = (F - 32) * 5/9

/* function convertirFahACelsi(gradoFah){
    var celsius = (gradoFah - 32) * 5 / 9;
    return celsius;
}

var tempUno = convertirFahACelsi(32);
var tempdos = convertirFahACelsi(68);

console.log(tempUno);
console.log(tempdos);

// calcular la edad
function calcularEdad(yearNac){
    return 2020 - yearNac;
}

var edad = calcularEdad(1990);
console.log(edad) */


/*ejercicio para calcular cuantos años le falta a una persona para que se jubile
*una persona se jubila a los 65 años de edad
*enviar como datos a la funcion el año de nacimiento y su nombre
*/

/* function calcularTiempoJubilacion(nombre, añoNac){
    var edad = calcularEdad(añoNac);
    if (edad >= 65 ){
        console.log(nombre + ' Ya es jubilado')
    }else{
        var tiempo = 65 - edad;
        console.log(nombre + ' todavia no es jubilado, le faltan ' + tiempo + ' años para jubilarse');
    }
    return 0;
}

var nombre = 'Joni'
var aNac = 1990
var jubilacion = calcularTiempoJubilacion(nombre,aNac); */

//argumentos undefinded
/* var nombre;
var prueba = function (n){
    return 'hola ' + n;
}
nombre = "joni";
console.log (prueba(nombre))
 */


 //argumentos por default
/*  var sumar = function (a,b,c = 3){
     return a + b + c;
 }
 console.log (sumar(10,4)); */

//plantillas de cadenas (template String ``)
/* var nombre = 'Pablo';
console.log(`el nombre es:  ${nombre}`); */


/* ejercicio 4
implementar una funcion que nos permita evaluar el
porcentaje de respuestas positivas y negativas de un examnen
la funcion debe recibir el nombre y la cantidad de respuestas positivas y negativas
la funcion debe calcular el procentaje que representa cada respuesta, en una base de 100 pretuntas.
de las respuestas positivas se define el score de la persona
A(> 90%), B( 70% - 80%), C( 45% - 69%), D(< 45%) 
*/

var calcularScore = function(nombre, pos, neg){
    var porPos = (pos / 100) * 100;
    var porNeg = (neg / 100) * 100;
    var score = '';

    if(porPos > 90){
        score = 'A';
    }else if (porPos >= 70){
        score = 'B';
    }else if (porPos >= 45){
        score = 'C';
    }else{
        score = 'D';
    }
    return`${nombre} tiene el score ${score}, Positivas:${porPos}%, Negativas:${porNeg}` ;
}

var resultado = calcularScore('pablo', 65, 35);
console.log(resultado);