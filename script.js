const title = document.getElementById("title3d");

title.addEventListener("mousemove", (e) => {
  const rect = title.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = -(y - centerY) / 35;
  const rotateY = (x - centerX) / 35;

  // depth blur amount
  const blur = Math.min(Math.abs(rotateX) + Math.abs(rotateY), 6) / 35;

  title.style.transform = `
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale(1.05)
  `;

  title.style.filter = `blur(${blur}px)`;
});

title.addEventListener("mouseleave", () => {
  title.style.transform = `
    rotateX(0deg)
    rotateY(0deg)
    scale(1)
  `;
  title.style.filter = "blur(0px)";
});
