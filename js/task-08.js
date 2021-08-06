const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const inputRef = document.querySelector('[type="number"]');
const boxesRef = document.querySelector("div#boxes");

const getNum = () => {
  return Math.floor(Math.random() * 255);
};

const getRandomColor = () => {
  return `rgb(${getNum()}, ${getNum()}, ${getNum()})`;
};

const createBoxes = (amount) => {
  const divs = [];
  let boxSize = 20;

  for (let i = 0; i < amount; i += 1) {
    const newEl = document.createElement("div");
    newEl.style.width = `${boxSize + 10}px`;
    newEl.style.height = `${boxSize + 10}px`;
    newEl.style.backgroundColor = `${getRandomColor()}`;

    divs.push(newEl);
    boxSize += 10;
  }

  return divs;
};

renderBtn.addEventListener("click", () =>
  boxesRef.append(...createBoxes(inputRef.value))
);

destroyBtn.addEventListener("click", () => (boxesRef.innerHTML = ""));
