const toggle = document.querySelector(".toggle");
const navRight = document.querySelector(".nav-right");

toggle.addEventListener('click', ()=>{
    toggle.classList.toggle("active")
    navRight.classList.toggle("active")
})