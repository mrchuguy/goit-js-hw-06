const boxes = document.querySelector("#boxes");
const inputNumber = document.querySelector("input");
const createBut = document.querySelector("button[data-create]");
const destroyBut = document.querySelector("button[data-destroy]");

createBut.addEventListener("click", () => {
  createBoxes(inputNumber.value);
});

destroyBut.addEventListener("click", () => {
  destroyBoxes();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  destroyBoxes();
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const markup = `<div class="box" style="width:${size}px; height:${size}px; background-color:${getRandomHexColor()};">
    <span style="font-size:${size / 2}px; color:#FFFFFF;">${
      i + 1
    }</span></div>`;
    boxes.insertAdjacentHTML("beforeend", markup);
    size += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
