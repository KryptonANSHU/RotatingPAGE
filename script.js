const open = document.getElementById('open');
const close = document.getElementById('close');
const circle = document.getElementById('circle');
const outer = document.querySelector('.outer');
const nav =document.getElementById('nav');
console.log(nav);
console.log(circle);
open.addEventListener('click',()=>{
    console.log(1);
    circle.classList.add('rotate');
    outer.classList.add('active');
    nav.classList.remove('data');
    
})

close.addEventListener('click',()=>{
    console.log(1);
    circle.classList.remove('rotate');
    outer.classList.remove('active');
    nav.classList.add('data');
    
})