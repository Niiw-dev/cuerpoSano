// Nuevo código para el menú desplegable
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("menu").style.top = "-10px";
  } else {
    document.getElementById("menu").style.top = "0";
  }
}

let items = document.querySelectorAll('.slider .item');
let nextButtons = document.querySelectorAll('.item #next');
let prevButtons = document.querySelectorAll('.item #prev');
let active = 3;

function loadShow() {
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    for (var i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for (var i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}

loadShow();

nextButtons.forEach((button, index) => {
    button.onclick = function() {
        active = index + 1 < items.length ? index + 1 : index;
        loadShow();
    }
});

prevButtons.forEach((button, index) => {
    button.onclick = function() {
        active = index - 1 > items.length ? index - 1 : index;
        loadShow();
    }
});

