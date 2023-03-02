const liEL = document.querySelectorAll('li.item');
const categoriesList = document.querySelector('#categories');

console.log(`Number of categories: ${liEL.length}`);

liEL.forEach(item => {
  const title = item.firstElementChild.textContent;
  const elements = item.lastElementChild.children.length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}\n`);
});