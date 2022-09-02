// querySelector
const heading = document.querySelector('.header__texto h2') 

heading.textContent = 'Blog de café con consejos y cursos 2'

//console.log(heading);

//querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a');

enlaces[0].textContent = 'nosotrosC';
enlaces[0].classList.add('nueva-clase');
//enlaces[0].classList.remove('navegacion__enlace');

//console.log(enlaces[0]);


//getElementById  'no se usa tanto en las nuevas versiones'

const heading2 = document.getElementById('heading');

//console.log(heading2);

// generar un nuevo enlace

const EnlaceN = document.createElement('A');

// agregar el href

EnlaceN.href = 'nuevo-enlace.html';

//agregar el texto

EnlaceN.textContent = 'tienda virtual';

//agregar clase

EnlaceN.classList.add('navegacion__enlace');

// agregar al documento

const Navegacion = document.querySelector('.navegacion');

Navegacion.appendChild(EnlaceN);;

//console.log(EnlaceN);


//eventos

//console.log(1);

window.addEventListener('load', function () { // el load espera que cargue js y los archivod que dependen del html
    //console.log(3);
})

window.onload = function () {
    //console.log(11);
}

document.addEventListener('DOMContentLoaded', function () { // DOMContentLoaded solo espera qe cargue el html
    //console.log(9);
})

//console.log(6);

window.onscroll = function () {
   // console.log('scrolling');
}


//selecionar  elementos y asociarles eventos

let btnEnviar = document.querySelector('.boton--primario');

btnEnviar.addEventListener('click', function (e) {
    console.log(e);
    e.preventDefault();

    //validar formularios

    console.log('enviar');
});

// eventos de los Input y Textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');

const email = document.querySelector('#email');

const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input',leerTex);
email.addEventListener('input',leerTex);
mensaje.addEventListener('input',leerTex);

function leerTex(e) {
    //console.log(e.target.value);

    datos[e.target.id] = e.target.value;

    console.log(datos);
}