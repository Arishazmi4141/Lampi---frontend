
  gsap.registerPlugin(ScrollTrigger);

   gsap.from(".hero", {
    height: 0,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out"
  });

  // Subtitle + Description scroll hone par
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".subtitle",
      start: "top 80%",
      end: "bottom 50%",
      scrub: 2
    }
  });

  tl.to(".subtitle", { width: "100%", duration: 1 })
    .to(".desc", { width: "100%", marginTop: "20px", duration: 1 }, "-=0.5");

 
//! page 2 end 


  // ===== Hero Section =====
  gsap.from(".hero-content p, .hero-content h1, .hero-content .desc, .hero-content .btn", {
    scrollTrigger: {
      trigger: ".hero",
      start: "top 90%",
      end: "bottom 50%",
      scrub: true
    },
    y: 100,
    x: (i)=> i%2===0 ? -50 : 50,  // alternate curve
    opacity: 0,
    rotation: (i)=> i%2===0 ? -2 : 2,
    stagger: 0.15,
    ease: "power2.out"
  });

  // ===== Collections Section =====
  gsap.from(".collection-box", {
    scrollTrigger: {
      trigger: ".collections",
      start: "top 85%",
      end: "bottom 20%",
      scrub: true
    },
    y: 80,
    x: (i)=> i%2===0 ? -40 : 40,
    scale: 0.95,
    opacity: 1,
    rotation: (i)=> i%2===0 ? -1.5 : 1.5,
    stagger: 0.25,
    ease: "power2.out"
  });

  // Collection Images – Parallax + scale
  gsap.from(".collection-box .image img", {
    scrollTrigger: {
      trigger: ".collections",
      start: "top 85%",
      end: "bottom 20%",
      scrub: true
    },
    y: 50,
    scale: 1.05,
    opacity: 0.9,
    stagger: 0.25,
    ease: "power1.out"
  });

  // Collection Text – slide + fade
  gsap.from(".collection-box .text", {
    scrollTrigger: {
      trigger: ".collections",
      start: "top 85%",
      end: "bottom 20%",
      scrub: true
    },
    x: -50,
    opacity: 0,
    stagger: 0.25,
    ease: "power1.out"
  });
// Mobile Menu Toggle
    // const menuToggle = document.getElementById('menu-toggle');
    // const navLinks = document.getElementById('nav-links');

    // menuToggle.addEventListener('click', () => {
    //   navLinks.classList.toggle('active');
    // });

    document.addEventListener("DOMContentLoaded", () => {
  console.log("JS Loaded Successfully!");
  
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
if (window.innerWidth <= 480) {
  if (mySlider) {
    mySlider.destroy(); // ✅ stop slider on mobile
  }
}



