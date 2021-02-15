let view = document.getElementById('connect-with-dan');
let close = document.getElementById('dont-connect-with-dan');
let connect = document.getElementById('connect-content');

let open = function() {
  connect.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  connect.style.display = 'none';
  close.style.display = 'none';
};

view.addEventListener('click', open);
close.addEventListener('click', hide);
/*
// Write your code here
function textChange() {
  view.innerHTML ='Hello World';
}

function textReturn() {
  view.innerHTML = 'View';
}
view.addEventListener('click', textChange);
close.addEventListener('click', textReturn);
*/