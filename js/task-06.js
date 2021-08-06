const inputRef = document.querySelector("#validation-input");

const numOfSimbol = inputRef.dataset.length;

inputRef.addEventListener("blur", (e) => {
  if (e.target.value.length === Number(numOfSimbol)) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
});
