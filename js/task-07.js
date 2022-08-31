const inputValue = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
inputValue.value = 19;

inputValue.addEventListener("input", (event) => {
  text.style.fontSize = `${inputValue.value}px`;
});
