//Examinando el DOM
//console.dir(document);

/* console.log(document.title);
document.title = 'Prueba';
console.log(document.title);
console.log(document.head);
console.log(document.body);
//console.log(document.all);
console.log(document.all[10]); // muestra el item nro 10 en mi documento
console.log(document.forms);
console.log(document.links); */

//getElementById()
/* console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');// selecciono un objeto del elemento
var header = document.getElementById('main-header'); */
/* console.log(header); */
/* headerTitle.textContent = 'Hola';
headerTitle.innerText = 'Adios';
headerTitle.innerHTML= '<h3>Prueba</h3>'; */

//getElementByClassName()
/* var items = document.getElementsByClassName('list-group-item');
console.log(items[3]);
items[0].textContent = 'Prueba'; */

//getElementsByTagName
/* var items = document.getElementsByTagName('li');
items[2].textContent = 'Preuba 02'; */

//querySelector
/* var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'hola';

var submit = document.querySelector('input[type="submit"]');
submit.value = 'Enviar';

var item = document.querySelector('.list-group-item');
item.style.color = 'red'; */

//querySelectorAll
/* var items = document.querySelectorAll('.list-group-item');
items[2].style.color = 'red';

var titulos = document.querySelectorAll('.title');
console.log(titulos);
titulos[0].textContent = 'Prueba';

var par = document.querySelectorAll('li:nth-child(even)');
var impar =document.querySelectorAll('li:nth-child(odd)');
for(var i = 0; i < impar.length; i++){
    impar[i].style.backgroundColor = '#ccc';
    par[i].style.backgroundColor = '#f4f4f4';
} */

//parentNode
var itemlist = document.querySelector('#items');
console.log(itemlist.parentNode);
var main = itemlist.parentNode;
main.style.backgoundColor = '#f4f4f4';

//parentElement
