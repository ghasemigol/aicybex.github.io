const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu-toggle");
if (menu) {
  menu.addEventListener("click", () => nav.classList.toggle("open"));
}

document.querySelectorAll(".project-grid article,.research-card,.person,.pub,.news-list article").forEach((el)=>{
  el.addEventListener("mousemove",()=>{
    el.style.boxShadow="0 24px 70px rgba(35,213,195,.16)";
  });
  el.addEventListener("mouseleave",()=>{
    el.style.boxShadow="";
  });
});
