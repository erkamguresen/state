'use strict';
function startQuiz() {
  document.getElementById("start")
    .style.display = "none";

  renderQuestion();

  document.getElementById("quiz")
    .style.display = "block";

  renderProgress();
  renderCounter();

  state.TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

function checkAnswer(event) {
  const answer = event.target.id;
  // debugger;
  if (answer == state.questions[state.runningQuestion].correct) {
    // answer is correct
    state.score++;
    // change progress color to green
    document.getElementById(state.runningQuestion)
      .style.backgroundColor = "#0f0";
  } else {
    // answer is wrong
    // change progress color to red
    document.getElementById(state.runningQuestion).style.backgroundColor = "#f00";
  }
  state.count = 0;
  if (state.runningQuestion < state.lastQuestion) {
    state.runningQuestion++;
    renderQuestion();
  } else {
    // end the quiz and show the score
    clearInterval(state.TIMER);
    debugger;
    const scoreContainer = document.getElementById("scoreContainer");
    scoreContainer.innerHTML = '';
    scoreContainer.style.display = 'block';
    const newScore = scoreRender(state.score, state.questions.length);
    scoreContainer.appendChild(newScore);
  }
}
