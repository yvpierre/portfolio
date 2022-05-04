import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const simpleParallax = require('simple-parallax-js');

let loader = document.getElementById("preloaderdefou");
const cursorRounded = document.querySelector(".rounded");
let menuItem = document.querySelector(".menu");
const likes = ["True detective", "Museums", "UI Design", "House music", "NBA", "Clothing", "Road trips", "UX Design", "Scorsese's movies"]
let studyIUT = document.querySelectorAll(".studies--iut");
let studyBAC = document.querySelectorAll(".studies--bac");


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
        }, 500
    );

    const showAnim = gsap.from('.navbar--others', {
        yPercent: -100,
        paused: true,
        duration: 0.2
    }).progress(1);

    ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
            self.direction === -1 ? showAnim.play() : showAnim.reverse()
        }
    });

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
window.addEventListener('scroll', () => {
    if (window.offsetHeight + window.scrollTop >= window.scrollHeight) {
        console.log('scrolled to bottom')
    }
})
function scrollText() {
    let item1 = document.querySelector(".item--1")
    let item2 = document.querySelector(".item--2")

    let wrapper = document.querySelector(".wrapper")

    var path = window.location.pathname;
    var page = path.split("/").pop();

    console.log("pre if")

    if(path === "index.html"){
        console.log("home")
        let interval = setInterval(changeText, 2000);
    }
    console.log("post if")

    function getRandomInt(max, last) {
        return Math.floor(Math.random() * max);
    }

    function changeText(){
        wrapper.classList.add('top')
        setTimeout(function(){
            let text1 = item2.textContent
            let rdm = likes[getRandomInt(likes.length, text1)]
            if(rdm === text2 || rdm === text1) {
                while(rdm === text2 || rdm === text1){
                    rdm = likes[getRandomInt(likes.length, text1)]
                }
            }
            let  text2 = rdm
            item1.innerHTML = text1
            item2.innerHTML = text2
            wrapper.classList.remove('top')

        },1000)


    }


}



// const animEpsi = gsap.form(".studies--epsi", { xPercent: -400, paused: true, duration: 3}).progress(1);

/* ScrollTrigger.create({
    start: "top 500px",
    end: 99999,
    scrub: 1,
    onUpdate: (self) => {
        animEpsi.play()
    }
}) */

new simpleParallax(studyIUT, {
    overflow: true,
    scale: 4,
    orientation: 'left'
})

new simpleParallax(studyBAC, {
    overflow: true,
    scale: 4,
    orientation: 'right',
})




class VerticalMouseDrivenCarousel {
    constructor(options = {}) {
        const _defaults = {
            carousel: ".js-carousel",
            bgImg: ".js-carousel-bg-img",
            list: ".js-carousel-list",
            listItem: ".js-carousel-list-item"
        };

        this.posY = 0;

        this.defaults = Object.assign({}, _defaults, options);

        this.initCursor();
        this.init();
        this.bgImgController();
    }

    //region getters
    getBgImgs() {
        return document.querySelectorAll(this.defaults.bgImg);
    }

    getListItems() {
        return document.querySelectorAll(this.defaults.listItem);
    }

    getList() {
        return document.querySelector(this.defaults.list);
    }

    getCarousel() {
        return document.querySelector(this.defaults.carousel);
    }

    init() {
        gsap.set(this.getBgImgs(), {
            autoAlpha: 0,
            scale: 1
        });

        gsap.set(this.getBgImgs()[0], {
            autoAlpha: 1,
            scale: 1
        });

        this.listItems = this.getListItems().length - 1;

        this.listOpacityController(0);
    }

    initCursor() {

        const listHeight = this.getList().clientHeight;
        const carouselHeight = this.getCarousel().clientHeight;

        this.getCarousel().addEventListener(
            "mousemove",
            event => {
                this.posY = event.pageY - this.getCarousel().offsetTop;
                let offset = -this.posY / carouselHeight * listHeight;

                gsap.to(this.getList(), 0.3, {
                    y: offset,
                    ease: Power4.easeOut
                });
            },
            false
        );
    }

    bgImgController() {
        for (const link of this.getListItems()) {
            link.addEventListener("mouseenter", ev => {
                let currentId = ev.currentTarget.dataset.itemId;

                this.listOpacityController(currentId);

                gsap.to(ev.currentTarget, 0.3, {
                    autoAlpha: 1
                });

                gsap.to(".is-visible", 0.2, {
                    autoAlpha: 0,
                    scale: 1
                });

                if (!this.getBgImgs()[currentId].classList.contains("is-visible")) {
                    this.getBgImgs()[currentId].classList.add("is-visible");
                }

                gsap.to(this.getBgImgs()[currentId], 0.6, {
                    autoAlpha: 1,
                    scale: 1
                });
            });
        }
    }

    listOpacityController(id) {
        id = parseInt(id);
        let aboveCurrent = this.listItems - id;
        let belowCurrent = parseInt(id);

        if (aboveCurrent > 0) {
            for (let i = 1; i <= aboveCurrent; i++) {
                let opacity = 0.5 / i;
                let offset = 5 * i;
                gsap.to(this.getListItems()[id + i], 0.5, {
                    autoAlpha: opacity,
                    x: offset,
                    ease: Power3.easeOut
                });
            }
        }

        if (belowCurrent > 0) {
            for (let i = 0; i <= belowCurrent; i++) {
                let opacity = 0.5 / i;
                let offset = 5 * i;
                gsap.to(this.getListItems()[id - i], 0.5, {
                    autoAlpha: opacity,
                    x: offset,
                    ease: Power3.easeOut
                });
            }
        }
    }
}

new VerticalMouseDrivenCarousel();
