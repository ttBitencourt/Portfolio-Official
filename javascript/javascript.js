//texto animado

const text = document.querySelector(".text-animate h3");

const textLoad = () => {
    
    setTimeout(() => {
        text.textContent = "Data Analyst";
        }, 0);

    setTimeout(() => {
        text.textContent = "PHP & SQL Developer";
        }, 4000);
    
    setTimeout(() => {
        text.textContent = "Business Inteligence ";
        }, 8000);
}

textLoad();
setInterval(textLoad, 13000);


//scroll de tela pequena navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll navbar aut

let menuLi = document.querySelectorAll('header nav a');
let section = document.querySelectorAll('section');

function activeMenu() {
    let currentSectionIndex = 0;
    let smallestOffset = Math.abs(window.scrollY - section[0].offsetTop);

    for (let i = 1; i < section.length; i++) {
        const offset = Math.abs(window.scrollY - section[i].offsetTop);
        if (offset < smallestOffset) {
            currentSectionIndex = i;
            smallestOffset = offset;
        }
    }

    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[currentSectionIndex].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

//definir a cor da barra nav
window.onscroll = () => {
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}

//mix it up que vi na internet
var mixer = mixitup(".portfolio-gallery");