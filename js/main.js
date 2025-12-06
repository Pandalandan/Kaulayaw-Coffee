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
// Get all add-to-cart buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartSummary = document.querySelector(".cart-summary");

// Cart array
let cart = [];

// Add item to cart
addToCartButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const name = btn.getAttribute("data-name");
    const price = parseFloat(btn.getAttribute("data-price"));

    // Check if item already exists in cart
    const existingItem = cart.find((item) => item.name === name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ name, price, quantity: 1 });
    }

    updateCart();
  });
});

// Update the cart summary
function updateCart() {
  if (!cartSummary) return;

  // Clear previous content
  cartSummary.innerHTML = "<h3>Your Cart</h3>";

  let total = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const itemDiv = document.createElement("p");
    itemDiv.innerHTML = `${item.name} x ${item.quantity} - ₱${itemTotal.toFixed(2)} 
      <button class="remove-btn" data-index="${index}">Remove</button>`;
    cartSummary.appendChild(itemDiv);
  });

  const totalDiv = document.createElement("p");
  totalDiv.classList.add("cart-total");
  totalDiv.textContent = `Total: ₱${total.toFixed(2)}`;
  cartSummary.appendChild(totalDiv);

  const checkoutBtn = document.createElement("button");
  checkoutBtn.textContent = "Checkout";
  checkoutBtn.addEventListener("click", () => {
    alert(`Thank you for your purchase! Total: ₱${total.toFixed(2)}`);
    cart = [];
    updateCart();
  });
  cartSummary.appendChild(checkoutBtn);

  // Add remove functionality
  const removeButtons = cartSummary.querySelectorAll(".remove-btn");
  removeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = parseInt(btn.getAttribute("data-index"));
      cart.splice(index, 1);
      updateCart();
    });
  });
}

// Initialize cart
updateCart();

