const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listRef = document.querySelector("ul#ingredients");

const ingridientsEl = ingredients.map((el) => {
  const listItemRef = document.createElement("li");
  listItemRef.textContent = el;
  return listItemRef;
});

listRef.append(...ingridientsEl);
