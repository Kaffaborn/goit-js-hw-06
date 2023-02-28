const input = document.querySelector('#validation-input');
const requiredLength = input.getAttribute('data-length');

input.addEventListener('blur', event => {
  const valueLength = event.target.value.length;

  if (valueLength === Number(requiredLength)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});