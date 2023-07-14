const formEl = document.querySelector('.form-search');
const uniqueEl = document.querySelector('.unique');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const inputStr = event.target.elements.uniqueEL.value;

  const wordArray = inputStr.toLowerCase().match(/[a-zA-Zа-яА-ЯёЁіІїЇєЄ]+/g);

  if (!wordArray || wordArray.length === 0) {
    uniqueEl.textContent = '';
    alert('The field is empty or a unique value does not exist');
    return;
  }

  const uniqueFirstLetters = wordArray
    .map(word => word[0])
    .filter((letter, index, arr) => arr.indexOf(letter) === arr.lastIndexOf(letter));

  if (uniqueFirstLetters.length > 0) {
    uniqueEl.textContent = uniqueFirstLetters[0];
  } else {
    uniqueEl.textContent = '';
    alert('A unique letter does not exist');
  }
}
