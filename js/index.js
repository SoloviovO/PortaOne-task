const unique = document.querySelector('.unique');
const formEl = document.querySelector('.form-search');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const inputStr = event.target.elements.uniqueEL.value;

  const arrayOfString = inputStr
    .replace(/[^a-zа-яё\s]/gi, ' ')
    .replace(/ {1,}/g, ' ')
    .trim()
    .toLowerCase()
    .split(' ');

  const uniqArrayFirstLetter = [];

  for (const arrayItem of arrayOfString) {
    const withoutFirstLetter = arrayItem.slice(1, arrayItem.length);
    if (withoutFirstLetter.includes(arrayItem[0])) {
    } else {
      uniqArrayFirstLetter.push(arrayItem[0]);
    }
  }

  const getNonDuplicatedValues = arr =>
    arr.filter((item, index) => {
      arr.splice(index, 1);
      const uniqLettter = !arr.includes(item);
      arr.splice(index, 0, item);
      return uniqLettter;
    });

  const uniqFirstLetter = getNonDuplicatedValues(uniqArrayFirstLetter).slice(0, 1).join();
  if (uniqFirstLetter) {
    unique.innerHTML = uniqFirstLetter;
  } else {
    alert('The field is empty or a unique value does not exist');
  }
}
