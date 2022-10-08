let middle = document.querySelector(".middle");
middle.style.height = window.innerHeight * 0.9;

let body = document.querySelector("body");
body.style.height = window.innerHeight;


if(middle.getBoundingClientRect().bottom >= window.innerHeight){
    body.style.top = (-1 * (window.innerHeight / 10)) + "px";
    body.classList.add("no_scroll");
}
