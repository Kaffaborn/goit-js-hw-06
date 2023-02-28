function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

function changeBackgroundColor() {
  const body = document.querySelector('body');
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}

changeColorButton.addEventListener('click', changeBackgroundColor)