let big = function(event) {
    event.target.style.transform = 'scale(1.1) rotate(-5deg)'
    /*event.target.style.transform = 'rotate(-5deg)'*/
}
let small = function(event) {
    event.target.style.transform = 'scale(1) rotate(0deg)'
    /*event.target.style.transform = 'rotate(0deg)'*/
}



let galleryBoxOne = document.getElementById('gallery-box-one');

galleryBoxOne.addEventListener('mouseover', big);
galleryBoxOne.addEventListener('mouseout', small);



let galleryBoxTwo = document.getElementById('gallery-box-two');

galleryBoxTwo.addEventListener('mouseover', big);
galleryBoxTwo.addEventListener('mouseout', small);




let galleryBoxThree = document.getElementById('gallery-box-three');

galleryBoxThree.addEventListener('mouseover', big);
galleryBoxThree.addEventListener('mouseout', small);



let galleryBoxFour = document.getElementById('gallery-box-four');

galleryBoxFour.addEventListener('mouseover', big);
galleryBoxFour.addEventListener('mouseout', small);

