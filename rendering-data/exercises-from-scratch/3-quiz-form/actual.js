'use strict';

const actual = ({ question, answers, correct, selected }) => {
  const formEl = document.createElement('form');
  const pEl = document.createElement('p');
  pEl.innerText = question;
  formEl.appendChild(pEl);

  for (let index = 0; index < answers.length; index++) {
    const answer = answers[index];

    const inputEl = document.createElement('input');
    inputEl.type = 'radio';
    inputEl.name = 'answers';

    const textEl = document.createElement('text');
    textEl.innerText = answer;

    if (index === selected) {
      //   inputEl.checked = true;
      inputEl.setAttribute('checked', true);

      if (index === correct) {
        textEl.className = 'correct';
        textEl.innerText += ' √';
      } else {
        textEl.className = 'incorrect';
        textEl.innerText += ' ✖';
      }
    }

    formEl.appendChild(inputEl);
    formEl.appendChild(textEl);
    formEl.appendChild(document.createElement('br'));
  }

  return formEl;
};
