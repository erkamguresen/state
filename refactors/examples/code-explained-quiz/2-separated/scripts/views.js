/**
 * takes a score and a number of questions
 * renders the score to a DIV
 * @param {number} score
 * @param {number} numberOfQuestions
 * @returns {HTMLDivElement}
 */
function scoreRender(score, numberOfQuestions) {
  // calculate the amount of question percent answered by the user
  const scorePerCent = Math.round(100 * score / numberOfQuestions);

  const pEl = document.createElement('p');
  pEl.innerHTML = scorePerCent + '%';

  return pEl;
}
