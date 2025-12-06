"use strict";

/* =====================
   Swiper
===================== */
const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

/* =====================
   Mobile Menu
===================== */
const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("move");
  navbar.classList.toggle("open-menu");
});

window.addEventListener("scroll", function () {
  menuIcon.classList.remove("move");
  navbar.classList.remove("open-menu");
});

/* =====================
   ScrollReveal
===================== */
const animate = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400
});

animate.reveal(".nav");
animate.reveal(".home-text", { origin: "left" });
animate.reveal(".home-img", { origin: "bottom" });
animate.reveal(".ser-box, .product-box, .team-box, .book-data", {
  interval: 100
});

/* =====================
   Product Popup
===================== */
const blurArea = document.querySelector(".product-content");
const popup = document.querySelector(".popup");
const productButtons = document.querySelectorAll(".button1");
const closePopupBtn = popup.querySelector("a");

function openPopup() {
  blurArea.classList.add("active");
  popup.classList.add("popup-active");
  document.body.classList.add("no-scroll");
}

function closePopup() {
  blurArea.classList.remove("active");
  popup.classList.remove("popup-active");
  document.body.classList.remove("no-scroll");
}

/* Attach events */
productButtons.forEach(function (button) {
  button.addEventListener("click", openPopup);
});

closePopupBtn.addEventListener("click", function (e) {
  e.preventDefault();
  closePopup();
});

/* =====================
   Shopping Cart
===================== */
"use strict";

const cart = [];
const TAX_RATE = 0.12;

const addToCartButtons = document.querySelectorAll(".add-to-cart");
const subtotalEl = document.getElementById("subtotal");
const taxEl = document.getElementById("tax");
const totalEl = document.getElementById("total");
const checkoutBtn = document.getElementById("checkoutBtn");
const cartMessage = document.getElementById("cartMessage");

/* Add product to cart */
function addToCart(name, price) {
  cart.push({
    name: name,
    price: price
  });
  updateTotals();
}

/* Calculate totals */
function updateTotals() {
  let subtotal = 0;

  cart.forEach(function (item) {
    subtotal += item.price;
  });

  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  subtotalEl.textContent = subtotal.toFixed(2);
  taxEl.textContent = tax.toFixed(2);
  totalEl.textContent = total.toFixed(2);
}

/* Button listeners */
addToCartButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const name = button.dataset.name;
    const price = Number(button.dataset.price);

    addToCart(name, price);
  });
});

/* Checkout */
checkoutBtn.addEventListener("click", function () {
  if (cart.length === 0) {
    cartMessage.textContent = "Please add an item before checking out.";
    return;
  }

  cartMessage.textContent =
    "Thank you for your order! Your total is ₱" + totalEl.textContent;

  cart.length = 0; // clear cart
  updateTotals();
});
