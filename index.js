// alert("This is working script");
gsap.registerPlugin(ScrollTrigger, TextPlugin, SplitText);

// Check screen size
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
//Check screen size ends

//Smooth Scroll init Lenis
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
//Init Lenis ends

//3 keys animation
gsap.set(".c-key", {
  opacity: 1,
});

gsap.from(".c-key", {
  opacity: 0,
  y: -20,
  ease: "none",
  stagger: 0.1,
  scrollTrigger: {
    start: "bottom 75%",
    trigger: ".c-hero",
    // markers: true,
  },
});
//3 keys animation ends

// Card animation
gsap.set(".c-card", {
  opacity: 1,
});

gsap.from(".c-card", {
  opacity: 0,
  y: -20,
  ease: "none",
  stagger: 0.5,
  scrollTrigger: {
    start: "top 70%",
    trigger: ".c-movemoney",
    // markers: true,
  },
});

// Text animation
// gsap.set("#hero-text", {
//   opacity: 0,
// });

// gsap.to("#hero-text", {
//   text: "Change all the Payments, Made International.",
//   delimiter: "",
//   duration: 2,
//   opacity: 1,
// });

// Text animation
document.fonts.ready.then(() => {
  //Type writing effect on the hero
  const textTl = gsap.timeline();
  textTl
    .set([".mint-coloured_text", ".dark-coloured_text"], {
      opacity: 0,
      text: "",
    })
    .to(".mint-coloured_text", {
      text: "Borderless Payments,",
      delimiter: "",
      duration: 1,
      opacity: 1,
    })
    .to(".dark-coloured_text", {
      text: "Made Local.",
      delimiter: "",
      duration: 1,
      opacity: 1,
    });

  // Heading text animation words flowing from below
  // const headerText = document.querySelectorAll("[data-title]");
  // headerText.forEach((header) => {
  //   gsap.set(header, { opacity: 1 });

  //   const results = new SplitText(header, {
  //     type: "words",
  //     wordsClass: "header",
  //   });

  //   const headertl = gsap.timeline({
  //     scrollTrigger: {
  //       markers: true,
  //       trigger: header,
  //       start: "top 90%",
  //     },
  //   });
  //   headertl.from(results.words, {
  //     duration: 1.2,
  //     yPercent: 100,
  //     ease: "power3.out",
  //     stagger: 0.25,
  //     opacity: 0,
  //   });
  // });

  //Heading text retrying
  const headerText = document.querySelectorAll("[data-title]");
  headerText.forEach((header) => {
    gsap.set(header, { opacity: 1 });

    const results = new SplitText(header, {
      type: "chars",
      charsClass: "header",
    });

    const headertl = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        trigger: header,
        start: "top 90%",
      },
    });
    headertl.from(results.chars, {
      duration: 0.002,
      y: "0%",
      delay: 0.3,
      opacity: 0.1,
      rotationX: -0,
      ease: "power1.none",
      stagger: {
        amount: 0.8,
        from: "start",
      },
    });
  });
});
