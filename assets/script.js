document.querySelectorAll(".card, .project-grid article, .person").forEach((el)=>{
  el.addEventListener("mousemove", e=>{
    const r=el.getBoundingClientRect();
    el.style.transform=`perspective(700px) rotateX(${-(e.clientY-r.top-r.height/2)/35}deg) rotateY(${(e.clientX-r.left-r.width/2)/35}deg)`;
  });
  el.addEventListener("mouseleave",()=>{el.style.transform="none";});
});