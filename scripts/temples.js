const menu = document.querySelector('#menu');
const nav = document.querySelector('nav')

menu.addEventListener('click',()=>{
    menu.classList.toggle('open');
    nav.classList.toggle('open');
})