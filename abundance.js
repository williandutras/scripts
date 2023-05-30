gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

mm.add("(min-width: 1025px",()=>{

    let tl5 = gsap.timeline({
        scrollTrigger:{
            trigger: ".topo",
            start:"top 10%",
            end: "bottom 40%",
            scrub: true,
            pin: true
        }
    })
    
    tl5.to(".topo",{
        opacity: 0,
        duration: 2,
        ease: "none"
    })

});

const scrolls = document.querySelectorAll(".scroll-left, .scroll-right, .scroll-bottom, .scroll-top");
scrolls.forEach((scroll) => {
    ScrollTrigger.create({ trigger: scroll, endTrigger: "body", start: "top 80%", toggleClass: "ativo" });
});
