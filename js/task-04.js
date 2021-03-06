let counterValue = 0;
const valueRef = document.querySelector("#value");
const increment = () => {
  counterValue++;
  valueRef.textContent = counterValue;
};
const decrement = () => {
  counterValue--;
  valueRef.textContent = counterValue;
};

document
  .querySelector("button[data-action='decrement']")
  .addEventListener("click", decrement);

document
  .querySelector("button[data-action='increment']")
  .addEventListener("click", increment);
