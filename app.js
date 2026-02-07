
// DVD animation color change
const circle = document.querySelector(".dvd-circle");

function randomColor() {
  return `hsl(${Math.random() * 360}, 80%, 55%)`;
}

circle.addEventListener("animationiteration", () => {
  circle.style.backgroundColor = randomColor();
});