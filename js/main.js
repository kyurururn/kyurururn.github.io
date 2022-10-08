let middle = document.querySelector(".middle");
middle.style.height = window.innerHeight;

let body = document.querySelector("body");
body.style.height = window.innerHeight;


//console.log(middle.getBoundingClientRect().bottom)
//console.log(window.innerHeight)

if(middle.getBoundingClientRect().bottom > window.innerHeight){
    body.style.top = (-1 * (window.innerHeight / 10)) + "px";
    body.classList.add("no_scroll");
}