// querySelector
const heading = document.querySelector('.header__texto h2') 

heading.textContent = 'Blog de café con consejos y cursos 2'

//console.log(heading);

//querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a');

enlaces[0].textContent = 'nosotros2';
enlaces[0].classList.add('nueva-clase');
enlaces[0].classList.remove('navegacion__enlace');

//console.log(enlaces[0]);


//getElementById  'no se usa tanto en las nuevas versiones'

const heading2 = document.getElementById('heading');

console.log(heading2);