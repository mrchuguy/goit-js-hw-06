const inputData = document.querySelector("#validation-input");
const dataLength = inputData.dataset.length;

inputData.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length == dataLength) {
    inputData.classList.add("valid");
    inputData.classList.remove("invalid");
  } else {
    inputData.classList.add("invalid");
    inputData.classList.remove("valid");
  }
});
