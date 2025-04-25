const grid = document.getElementById("dotGrid");
const dotSize = 6 + 6; // 5px dot + 3px margin both sides
// const columns = Math.floor(window.innerWidth / dotSize);
// const rows = Math.floor(window.innerHeight / dotSize);
// const columns = 33;
// const rows = 24;
const columns = 41;
const rows = 29;
const totalDots = columns * rows;

for (let i = 0; i < totalDots; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");

  const row = Math.floor(i / columns);
  const distanceFromCenter = Math.abs(row - rows / 2);
  const maxDistance = rows / 2;

  // Opacity fades toward top and bottom
  const opacity = 0.1 + (1 - distanceFromCenter / maxDistance) * 0.1;
  dot.style.backgroundColor = `rgba(0, 0, 0, ${opacity.toFixed(2)})`;

  grid.appendChild(dot);
}
