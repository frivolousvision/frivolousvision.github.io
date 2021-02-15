
let danPicHome = document.getElementById('dan-pic-home');


let up = function(event) {
    event.target.style.transform = 'rotate(-5deg)';
}
let down = function(event) {
    event.target.style.transform = 'rotate(0deg)';
}

danPicHome.addEventListener('mouseover', up);
danPicHome.addEventListener('mouseout', down);


