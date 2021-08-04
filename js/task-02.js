const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const list = document.querySelector("ul#ingredients");

ingredients.forEach((el) => {
  const listItemRef = document.createElement("li");
  listItemRef.textContent = el;
  list.append(listItemRef);
});
