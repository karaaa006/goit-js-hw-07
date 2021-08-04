const categoriesListRef = document.querySelector("ul#categories");
const categoriesNum = categoriesListRef.children.length;

console.log(`В списке ${categoriesNum} категории.`);

categoriesListRef.querySelectorAll("li.item").forEach((el) => {
  const elTitleRef = el.querySelector("h2");
  const elListRef = el.querySelector("ul");

  console.log(`Категория: ${elTitleRef.textContent}`);
  console.log(`Количество элементов: ${elListRef.children.length}`);
});
