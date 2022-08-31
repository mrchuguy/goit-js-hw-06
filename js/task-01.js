const listItem = categories.children;
console.log("Number of categories: ", listItem.length);

for (let i = 0; i < listItem.length; i++) {
  console.log("\n");

  const itemTitle = listItem[i].querySelector("h2").innerHTML;
  console.log("Category: ", itemTitle);

  const innerList = listItem[i].querySelector("ul");
  console.log("Elements: ", innerList.children.length);
}
