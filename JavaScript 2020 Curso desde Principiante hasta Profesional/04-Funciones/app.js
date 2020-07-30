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

 