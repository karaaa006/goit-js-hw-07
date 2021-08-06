const controlRef = document.querySelector("input#font-size-control");
const textRef = document.querySelector("span#text");

console.dir(controlRef);
controlRef.addEventListener(
  "input",
  (e) => (textRef.style.fontSize = e.target.value + "px")
);
