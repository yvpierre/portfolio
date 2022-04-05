var loader = document.getElementById("preloaderdefou");
const cursorRounded = document.querySelector(".rounded");
var menuItem = document.querySelector(".menu");
var nom = document.querySelector(".nom");

menuItem.addEventListener("mouseover", function(){
   menuItem.style.color = "blue !important";
});

window.addEventListener("load", function(){
    window.setTimeout(
        removeLoader, 1000
    );
})

function removeLoader() {
    loader.style.display = "none";
}

const moveCursor = (e)=> {
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

}
window.addEventListener('mousemove', moveCursor);
