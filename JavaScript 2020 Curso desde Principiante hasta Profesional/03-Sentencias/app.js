/**********************************************
* Sentencia if / else
**********************************************/

/* var nombre = 'pablo';
var estadocivil = 'soltero';

if (estadocivil === 'casado'){
    //true
    console.log(nombre + ' esta casado');
}else{
    //false
    console.log(nombre + ' esta soltero');
} */

/**********************************************
* Sentencia Condicionales
**********************************************/

/* var nombre = 'Pablo';
var edad = 15;
 */
// edad < 12 es un niño.
// edad > 11, es < 18, es adolescente.
// edad > 17, es < 60, es adulto.
// edad > 60, es anciano.

/* if (edad<12) {
    console.log(nombre + ' es un niño.');
}else if((edad>11) && (edad<18)){
    console.log(nombre + ' es un adolescente.');
}else if((edad>17) && (edad<60)){
    console.log(nombre + ' es un adulto.');
}else{
    console.log(nombre + ' es un anciano.');
} */


/**********************************************
* Operador ternario
**********************************************/

/* var nombre = 'Pablo';
var edad = 19;

edad>= 18 ? console.log(nombre + ' es mayor de edad') : console.log(nombre + ' no es mayor de edad'); */

/**********************************************
* Sentencia Switch
**********************************************/

/* var mes = 8;
switch(mes){
    case 1:
        console.log('Enero');
        break;
    case 2:
        console.log('Febrero');
        break;
    case 3:
        console.log('Marzo');
        break;
    case 4:
        console.log('Abril');
        break;
    case 5:
        console.log('Mayo');
        break;
    default:
        console.log('Mes no considerado');
} */

/**********************************************
* Sentencias repetitivas - bucles
* for
* while
* do..while
**********************************************/

/* sentencia for
for (var i = 0; i <= 10; i++){
    console.log(i);
}*/

/* sentencia while
var i = 10;
while (i >=1){
    console.log(i);
    i--;
}*/

/*sentencia do while
var i = 12;
do{
    console.log(i);
    i++;
}while (i <= 10)*/

/************
 * Ejercicio de sentencias
 */

 /*******
  * Hay 2 alumnos Pablo y Maria
  * Pablo tiene las siguientes notas: 14, 8, 16.
  * Maria tiene las siguientes notas: 12, 18, 10.
  * 
  * Caluclar el promedio de cada alumno, ademas de indicar quien tiene el promedio
  * superior, e indicar si el alumno esta aprobado, para ello su promedio
  * debe ser superiror a 13
  */

  var promedioPablo = (14 + 8 + 16) / 3;
  var promedioMaria = (12 + 18 + 10) / 3;

  if (promedioPablo == promedioMaria){
    console.log ("Tienen el mismo promedio")
  }else if (promedioPablo > promedioMaria){
      console.log("El promedio de Pablo es superior al de maria")
  }else{
    console.log("El promedio de Maria es superior al de Pablo")
  }

  console.log('Promedio de pablo ' + promedioPablo)
  console.log('Promedio de maria ' + promedioMaria)
  if (promedioPablo > 13){
      console.log("Pablo esta aprobado")
  }else{
    console.log("Pablo esta desaprobado")
  }

  if (promedioMaria > 13){
    console.log("Maria esta aprobada")
}else{
  console.log("Maria esta desaprobada")
}