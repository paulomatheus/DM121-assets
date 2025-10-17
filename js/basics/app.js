const button = document.getElementById("btn-color");
const span = document.querySelector("span");
const input = document.querySelector("input");
const colors = ["gray", "white", "pink", "blue"];

function addColor(color) {
  const p = document.createElement("p");
  p.textContent = color;
  document.body.appendChild(p);
}

button.addEventListener("click", () => {
  const colorNumber = Number.parseInt(Math.random() * colors.length);
  const colorName = colors[colorNumber];
  document.body.style.backgroundColor = colorName;
  span.textContent = colorName;
  document.title = `Color: ${colorName}`;
  addColor(colorName);
});

input.addEventListener("input", () => {
  const h2 = document.querySelector("h2");
  h2.textContent = input.value || "Type something";
});