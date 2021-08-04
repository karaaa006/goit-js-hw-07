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
  const li = document.createElement("li");
  li.textContent = el;
  list.append(li);
});
