



//new landing 
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}


// Dark Mode
let darkmode = document.querySelector('#darkmodea');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}

/////////////////////////////


ScrollReveal().reveal('#cat',{
    delay: 75,
    duration: 1500,
    opacity: 0,
    distance:'40px' ,
    origin: "top",
    reset: true
  });