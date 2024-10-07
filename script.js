
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overFlow = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overFlow .addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})



let header = document.querySelector('.header')

window.addEventListener("scroll", function(){

    header.classList.toggle('rolagem', window.scrollY > 0)
})