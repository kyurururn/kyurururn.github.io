$(window).on("pageshow", () => {
    let count = 0;
    let eles = $(".menu").children();


    let interval = setInterval(() => {
        if(count == eles.length){
            clearInterval(interval);
            return
        }else{
            eles.eq(count).attr("id","fadein")
        }
        count++;
    },100)
})


$(".menu_button").click((event) => {
    let count = 0;
    let eles = $(".menu").children();
    let interval = setInterval(() => {
        if(count == eles.length){
            clearInterval(interval);
            setTimeout(() => {
                location.href = $(event.currentTarget).attr("class").split(" ")[1] + ".html"
            },100);
            return;
        }else{
            eles.eq(count).attr("id","fadeout")
        }
        count++;
    },100)
})