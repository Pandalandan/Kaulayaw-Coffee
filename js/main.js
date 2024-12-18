// Swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// Menu Open Close
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("move");
  navbar.classList.toggle("open-menu");
};
// Close Menu On Scroll
window.onscroll = () => {
  menu.classList.remove("move");
  navbar.classList.remove("open-menu");
};
// ScrollReveal Animation
const animate = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: "2500",
  delay: "400",
});

animate.reveal(".nav");
animate.reveal(".home-text", { origin: "left" });
animate.reveal(".home-img", { origin: "bottom" });
animate.reveal(".ser-box, .product-box,.team-box,.book-data", {
  interval: 100,
});

function toggle() {
  var blur = document.getElementById('blur');
  var popup = document.getElementById('popup');
  
  // Toggle both blur and popup
  blur.classList.toggle('active');
  popup.classList.toggle('popup-active');

  // Prevent body scrolling when the popup is active
  document.body.classList.toggle('no-scroll', popup.classList.contains('popup-active'));
}