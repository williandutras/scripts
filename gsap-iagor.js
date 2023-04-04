let btn = document.querySelector('.botao a');
btn.addEventListener('mousemove', e => {
  let rect = e.target.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  btn.style.setProperty('--x', x + 'px');
  btn.style.setProperty('--y', y + 'px');
});

gsap.from(".animation1",{
  scrollTrigger:{
    trigger:".animation1",
    scroller:"body",
    markers: false,
    start: "top 80%",
    end: "top top",
    scrub: true
  },
  filter: "blur(10px)",
  opacity: 0.5,
  duration: 2,
  delay: 1,
});

gsap.registerPlugin(ScrollTrigger);
let mm = gsap.matchMedia();
mm.add("(min-width: 980px)", () => {

  gsap.from(".animation2",{
    scrollTrigger:{
      trigger:".animation2",
      scroller:"body",
      markers: false,
      start: "top 5%",
      end: "bottom",
      scrub: true
    },
    filter: "blur(0px)",
    opacity: 1,
    duration: 2,
    delay: 1,
  });

});

let tl1 = gsap.timeline({ 
        scrollTrigger: { 
            trigger: ".animation3", 
            start: "top top", 
            end: "+=" + 1 * window.innerHeight + "px", 
            scrub: 1, 
            pin: !0,
        }
    });
    tl1.to(".animation3 img", { filter: "blur(0px)", opacity: 1, duration: 1, ease: "none" });
    tl1.to(".animation3", { filter: "blur(50px)", opacity: 0, delay: 2, duration: 1, ease: "none" });



const scrolls = document.querySelectorAll(".scroll-left, .scroll-right, .scroll-bottom, .scroll-top");
scrolls.forEach((scroll) => {
    ScrollTrigger.create({ trigger: scroll, endTrigger: "body", start: "top 80%", toggleClass: "ativo" });
});
