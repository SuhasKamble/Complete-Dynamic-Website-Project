const burger = document.querySelector('.burger')
const navLinks = document.querySelector('.navLinks')
const bars = document.querySelector('.fa-bars')
const links = document.querySelectorAll('.navLinks a')

burger.addEventListener("click",()=>{
    navLinks.classList.toggle("show")
    bars.classList.toggle('fa-times')
})

links.forEach(link => {
    link.addEventListener('click',()=>{
        navLinks.classList.remove("show")
        bars.classList.remove("fa-times")
    })
});