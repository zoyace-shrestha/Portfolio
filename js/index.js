const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");
const sunIcon = document.querySelector(".toggle .fa-sun");
const moonIcon = document.querySelector(".toggle .fa-moon");
const toggle = document.querySelector("#toggle");
const body = document.querySelector("body");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

toggle.addEventListener("change", () => {
  body.classList.toggle("dark");
  sunIcon.className = sunIcon.className == "fas fa-sun" ? "fas fa-sun" : "fas fa-sun";
  moonIcon.className = moonIcon.className == "fa fa-moon" ? "fa fa-moon" : "fa fa-moon";

})

