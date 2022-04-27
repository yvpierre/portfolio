let loader = document.getElementById("preloaderdefou");
const cursorRounded = document.querySelector(".rounded");
let menuItem = document.querySelector(".menu");
let nom = document.querySelector(".nom");
const likes = ["True detective", "Museums", "UI Design", "House music", "NBA", "Clothing", "Road trips", "UX Design", "Scorsese's movies"]
let bothItems = document.querySelector(".item--anim")

document.addEventListener("DOMContentLoaded", function(event) {
    if(document.getElementsByClassName(''.length > 0)){
        scrollText();
    }
})

menuItem.addEventListener("mouseover", function(){
   menuItem.style.color = "blue !important";
});

window.addEventListener("load", function(){
    window.setTimeout(
        function(){
            removeLoader();
            var tl = gsap.timeline();
            tl.to(".nom",{ y:0, opacity:1, duration:1})
        }, 1000
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

function scrollText() {
    let item1 = document.querySelector(".item--1")
    let item2 = document.querySelector(".item--2")

    let wrapper = document.querySelector(".wrapper")

    let interval = setInterval(changeText, 2000);

    function getRandomInt(max, last) {
        return Math.floor(Math.random() * max);
    }

    function changeText(){
        wrapper.classList.add('top')
        setTimeout(function(){
            let text1 = item2.textContent
            let text2 = likes[getRandomInt(likes.length, text1)]
            item1.innerHTML = text1
            item2.innerHTML = text2
            wrapper.classList.remove('top')

        },1000)


    }


}

