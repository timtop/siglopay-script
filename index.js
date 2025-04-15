alert("This is working script");
gsap.registerPlugin(ScrollTrigger);

// Lenis Init
let isMobile = false;

function checkDevice() {
  if (window.innerWidth <= 767) {
    isMobile = true;
  } else {
    isMobile = false;
  }
}
checkDevice();
window.addEventListener("resize", checkDevice);

//Smooth Scroll
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
