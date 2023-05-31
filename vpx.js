gsap.registerPlugin(ScrollTrigger);

const primeiro = document.querySelector(".primeiro");
const segundo = document.querySelector(".segundo");
const terceiro = document.querySelector(".terceiro");

const colunaFixa = document.querySelector(".colunaFixa");

let mm = gsap.matchMedia();

mm.add("(min-width: 1025px",()=>{
const colunaFixa = document.querySelector(".colunaFixa");
let tl7 = gsap.timeline({
    scrollTrigger:{
        trigger: ".colunaFixa",
        start:"top 20%",
        endTrigger: ".cta",
        end: "bottom 50%",
        scrub: true,
        pin: true,
    }
})

tl7.to(".colunaFixa",{
    opacity: 0,
    ease: "none"
})

let largura = getComputedStyle(document.documentElement).getPropertyValue("--largura");
let tl5 = gsap.timeline({
        scrollTrigger:{
            trigger: ".bullets",
            start:"top 65%",
            end: "bottom 40%",
            scrub: true
        }
    })
    
    tl5.to(".primeiro",{
        "--largura": "700%",
        duration: 2,
        ease: "none"
    })
    
    ScrollTrigger.create({
        trigger: primeiro,
        endTrigger: "body",
        start: "top 70%",
        toggleClass: "ativo",
    });
    
    ScrollTrigger.create({
        trigger: segundo,
        endTrigger: "body",
        start: "top 60%",
        toggleClass: "ativo",
    });
    
    ScrollTrigger.create({
        trigger: terceiro,
        endTrigger: "body",
        start: "top 55%",
        toggleClass: "ativo",
    });
});

mm.add("(max-width: 1024px",()=>{
    let tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: ".bullets",
            start: "top 10%",
            end: "top 10%",
            scrub: true
        }
    });
    
    tl6.to(".primeiro",{
        "--altura": "500%",
        duration: 4,
        ease: "none"
    });
    
    ScrollTrigger.create({
        trigger: primeiro,
        endTrigger: "body",
        start: "top 60%",
        toggleClass: "ativo",
    });
    
    ScrollTrigger.create({
        trigger: segundo,
        endTrigger: "body",
        start: "top 70%",
        toggleClass: "ativo",
    });
    
    ScrollTrigger.create({
        trigger: terceiro,
        endTrigger: "body",
        start: "top 75%",
        toggleClass: "ativo",
    });
});

const scrolls = document.querySelectorAll(".scroll-left, .scroll-right, .scroll-bottom, .scroll-top");
scrolls.forEach((scroll) => {
    ScrollTrigger.create({ trigger: scroll, endTrigger: "body", start: "top 80%", toggleClass: "ativo" });
});

var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
            320: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            1025: {
                slidesPerView: 2,
                spaceBetween: 20,
            }
        }
    });
