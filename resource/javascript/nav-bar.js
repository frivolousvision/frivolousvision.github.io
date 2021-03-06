const hamburger = document.getElementById('hamburger');
const dropNav = document.getElementById('drop-nav');
const navLinks = document.getElementById('nav-links')
const nav = document.getElementById('nav');
const angleUP = document.getElementById('angle-up');
const navBtn1 = document.getElementById('nav-btn-1');
const navBtn2 = document.getElementById('nav-btn-2');
const navBtn3 = document.getElementById('nav-btn-3');


const open = function() {
    dropNav.style.display = "flex";
    dropNav.style.flexDirection = "column";
    dropNav.style.zIndex = "10";
    dropNav.style.backgroundColor = "black";
    dropNav.style.position = "fixed";
    dropNav.style.width = "100%";
    

    navLinks.style.display = "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.justifyContent = "space-around"
    navLinks.style.alignItems = "center"
    navLinks.style.height = "40vh";
    
    

    nav.style.display = "none";
    hamburger.style.display = "none";
}

const close = function() {
    dropNav.style.display = "none";
    nav.style.display ="flex";
    hamburger.style.display = "inherit";
}

hamburger.addEventListener('click', open);
angleUP.addEventListener('click', close);
navBtn1.addEventListener('click', close);
navBtn2.addEventListener('click', close);
navBtn3.addEventListener('click', close);
