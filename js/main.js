let body = document.querySelector("body");
let scrollTop = window.scrollY;
body.style.top = (scrollTop - 1) + "px";
body.classList.add("no_scroll");

window.scrollBy(0,screen.height/2);