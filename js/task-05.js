const inputRef = document.querySelector("#name-input");
const greetRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (e) => {
  greetRef.textContent = e.target.value;

  if (e.target.value === "") {
    greetRef.textContent = "незнакомец";
  }
});
