function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBut = document.querySelector(".change-color");
const colorTextValue = document.querySelector(".color");
const page = document.querySelector("body");

changeColorBut.addEventListener("click", () => {
  const colorValue = getRandomHexColor().toUpperCase();
  colorTextValue.textContent = colorValue;
  page.style.backgroundColor = colorValue;
});
