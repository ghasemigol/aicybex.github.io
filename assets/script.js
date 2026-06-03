const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu-toggle");
if (menu) menu.addEventListener("click", () => nav.classList.toggle("open"));

const slides = [...document.querySelectorAll(".slide")];
const dots = [...document.querySelectorAll(".dot")];
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let current = 0;
let timer;

function showSlide(index) {
  current = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle("active", i === current));
  dots.forEach((dot, i) => dot.classList.toggle("active", i === current));
}

function startSlider() {
  timer = setInterval(() => showSlide(current + 1), 5000);
}

function resetSlider() {
  clearInterval(timer);
  startSlider();
}

if (slides.length) {
  next.addEventListener("click", () => { showSlide(current + 1); resetSlider(); });
  prev.addEventListener("click", () => { showSlide(current - 1); resetSlider(); });
  dots.forEach((dot, i) => dot.addEventListener("click", () => { showSlide(i); resetSlider(); }));
  startSlider();
}

document.querySelectorAll(".project-grid article,.research-card,.person,.pub,.news-list article").forEach((el)=>{
  el.addEventListener("mousemove",()=>{ el.style.boxShadow="0 24px 70px rgba(35,213,195,.16)"; });
  el.addEventListener("mouseleave",()=>{ el.style.boxShadow=""; });
});
