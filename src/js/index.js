// navbar
const navbar =document.querySelector('#navbar');
const navMenu = document.querySelector('#nav-menu');
navbar.addEventListener("click", ()=> {
    navbar.classList.toggle('navbar-active')
    navMenu.classList.toggle('hidden')
})

// nav-fixed
window.onscroll = () => {
    const header = document.querySelector('header');
    const fix = header.offsetTop;

    if (window.pageYOffset > fix) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

