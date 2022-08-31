let counterValue = 0;

const pageCounter = document.querySelector("#value");
const decrementBut = document.querySelector('button[data-action="decrement"]');
const incrementBut = document.querySelector('button[data-action="increment"]');
decrementBut.addEventListener("click", () => {
  counterValue--;
  pageCounter.textContent = counterValue;
});
incrementBut.addEventListener("click", () => {
  counterValue++;
  pageCounter.textContent = counterValue;
});
