let tl = gsap.timeline();
let tl2 = gsap.timeline({ paused: true });
let burger = document.querySelector(".burger");
let close = document.querySelector(".close");

tl.from(".hero__left", { y: "100", duration: "0.5", delay: "0.3" });
tl.from(".hero__title", { opacity: "0", duration: "1.3" }, "-=0.4");
tl.from(".hero__btn", { opacity: "0", duration: "0.8" }, "-=1.2");
tl.from(".hero__descr", { opacity: "0", duration: "1.8" }, "-=1");
tl.from(".a", { opacity: "0", duration: "1.5" }, "-=1.3");
tl.from(".b", { opacity: "0", duration: "0.6" }, "-=1.2");
tl.from(".c", { opacity: "0", duration: "0.6" }, "-=0.8");
tl.from(".photos__author", { opacity: "0", duration: "2" }, "-=0.6");

tl2
  .fromTo(
    ".menu",
    { display: "none", opacity: 0 },
    { display: "block", opacity: 1, duration: "0.6" }
  )
  .from(".menu__top", { opacity: 0, y: "-20", duration: "0.7" }, "-=0.4")
  .from(".menu__container", {
    opacity: 0,
    y: "30",
    duration: "0.2",
  })
  .from(".social", { opacity: 0, y: "20", duration: "0.4", delay: "0.1" })
  .from(".menu__right", { opacity: 0, y: "20", duration: "0.4" }, "-=0.4");

burger.onclick = function () {
  tl2.play();
};
close.onclick = function () {
  tl2.reverse();
};
