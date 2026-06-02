document.querySelectorAll(".card, .project-grid article, .person, .map-node").forEach((el)=>{
  el.addEventListener("mousemove", e=>{
    const r=el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX-r.left}px`);
    el.style.setProperty("--my", `${e.clientY-r.top}px`);
  });
});