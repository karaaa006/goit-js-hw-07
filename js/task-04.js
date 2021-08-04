let counterValue = 0;
const valueRef = document.querySelector("#value");
const increment = () => {
  counterValue++;
  valueRef.textContent = Number(valueRef.textContent) + 1;
};
const decrement = () => {
  valueRef.textContent -= 1;
};

document
  .querySelector("button[data-action='decrement']")
  .addEventListener("click", decrement);

document
  .querySelector("button[data-action='increment']")
  .addEventListener("click", increment);
