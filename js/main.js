//window.scrollBy(0,screen.height/2);
//console.log(body.clientHeight)
//console.log(window.innerHeight)

let middle = document.getElementById("middle");
middle.style.height = window.clientHeight * 0.9;

let body = document.querySelector("body");
body.style.height = window.clientHeight;

let scrollTop = window.scrollY;
body.style.top = (scrollTop * -1) + "px";
body.classList.add("no_scroll");

window.scrollBy(0,(body.clientHeight - window.innerHeight) / 2)
