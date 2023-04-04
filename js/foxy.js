const gif = document.getElementById('gif');
    const waitTime = 3000;
    const loop = () => {
      gif.play();
      setTimeout(() => {
        gif.pause();
        setTimeout(loop, waitTime);
      }, gif.duration * 1000);
    };
loop();


$(window).on("pageshow", () => {
  gif.play();
})