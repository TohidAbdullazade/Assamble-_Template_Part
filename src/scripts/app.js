let header = document.querySelector("header");
let floatButton = document.querySelector("#floatButton");

// ===> SWIPER START SCRIPT <===
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ===> WHEN THE SCROLL START THE HEADER BORDER CHANGE <===
window.addEventListener("scroll", () => {
  if (window.scrollY >= 111) {
    header.style.borderBottom = "1px solid #e5e5e5";
  } else {
    header.style.borderBottom = "none";
  }
});

// ===> WHEN CLICK IT THEN GO TO THE TOP SECTION <===
floatButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
console.log(window.open());
