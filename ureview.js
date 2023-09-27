var urlParams = new URLSearchParams(window.location.search);

var links = document.getElementsByTagName("a");

for (var i = 0; i < links.length; i++) {
    var link = links[i];
    var linkURL = link.href;

    if (!linkURL.includes('#')) {
        var separator = linkURL.includes('?') ? '&' : '?';
        link.href = linkURL + separator + urlParams.toString();
    }
}

gsap.registerPlugin(ScrollTrigger);

const scrolls = document.querySelectorAll(".scroll-left, .scroll-right, .scroll-bottom, .scroll-top");
scrolls.forEach((scroll) => {
    ScrollTrigger.create({ trigger: scroll, endTrigger: "body", start: "top 80%", toggleClass: "ativo" });
});
