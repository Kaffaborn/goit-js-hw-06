const liEL = document.querySelectorAll('li.item');

console.log(`Number of categories: ${liEL.length}`);

for (const item of liEL) {
    const categoriesName = item.querySelector("h2").textContent;
    const categoriesElements = item.querySelectorAll("li").length;
    console.log(`Category: ${categoriesName}`);
    console.log(`Elements: ${categoriesElements}`);
}