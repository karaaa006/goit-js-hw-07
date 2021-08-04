(function () {
  const categoriesList = document.querySelector("ul#categories");
  const categoriesNum = categoriesList.children.length;

  console.log(`В списке ${categoriesNum} категории.`);

  categoriesList.querySelectorAll("li.item").forEach((el) => {
    const elTitle = el.querySelector("h2");
    const elNum = el.querySelector("ul");

    console.log(`Категория: ${elTitle.textContent}`);
    console.log(`Количество элементов: ${elNum.children.length}`);
  });
})();
