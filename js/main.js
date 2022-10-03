window.addEventListener("touchmove",function(event){
    event.preventDefault();
});

let element = document.querySelector("body");
element.scrollIntoView({behavior:"instant",block:"center"});