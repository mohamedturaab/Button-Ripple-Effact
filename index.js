// alert("Hello world!");

const btnEl  = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (even) => {
    const x =(even.pageX - btnEl.offsetLeft)
    const y =(even.pageY - btnEl.offsetTop)
    btnEl.style.setProperty("--xPos",x + "px")
    btnEl.style.setProperty("--yPos",y + "px")

});