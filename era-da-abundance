gsap.registerPlugin(ScrollTrigger);
const colunaFixa = document.querySelector(".colunaFixa");

let mm = gsap.matchMedia();

mm.add("(min-width: 1025px",()=>{
const colunaFixa = document.querySelector(".colunaFixa");
let tl7 = gsap.timeline({
    scrollTrigger:{
        trigger: ".colunaFixa",
        start:"top 20%",
        endTrigger: ".cta",
        end: "bottom 30%",
        scrub: true,
        pin: true
    }
})

  tl7.to(".colunaFixa",{
      opacity: 0,
      ease: "none"
  })

});

let splitType = new SplitType("[text-split]",{
  types: "words, chars",
  tagName: "span"
});

let textos = document.querySelectorAll("[letter-fade");

textos.forEach(texto => {
  let childLetters = document.querySelectorAll(".char");
  
  let tl = gsap.timeline({
      scrollTrigger:{
          trigger: texto,
          start: "top 60%",
          end: "top 30%",
          scrub: 2
      }
  })
  
  tl.from(childLetters,{
      opacity: 0,
      stagger:{
          each: 0.02,
          from: "random"
      }
  });
  
  tl.from(texto,{
      scale: 1.2,
      duration: 2
  },0)
});

const scrolls = document.querySelectorAll(".scroll-left, .scroll-right, .scroll-bottom, .scroll-top");
scrolls.forEach((scroll) => {
    ScrollTrigger.create({ trigger: scroll, endTrigger: "body", start: "top 80%", toggleClass: "ativo" });
});
