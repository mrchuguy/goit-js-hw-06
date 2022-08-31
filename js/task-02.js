const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const items = [];
ingredients.forEach((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  items.push(item);
});
list.append(...items);
