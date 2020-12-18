
// function scoreRender() {
//   const divEl = document.getElementById("scoreContainer");

//   divEl.style.display = "block";

//   // calculate the amount of question percent answered by the user
//   const scorePerCent = Math.round(100 * state.score / state.questions.length);

//   // choose the image based on the scorePerCent
//   // let img = (scorePerCent >= 80) ? "img/5.png" :
//   // (scorePerCent >= 60) ? "img/4.png" :
//   // (scorePerCent >= 40) ? "img/3.png" :
//   // (scorePerCent >= 20) ? "img/2.png" :
//   // "img/1.png";

//   // divEl.innerHTML = "<img src=" + img + ">";
//   divEl.innerHTML += "<p>" + scorePerCent + "%</p>";
// }

function renderQuestion() {
  // debugger
  let q = state.questions[state.runningQuestion];

  document.getElementById("question")
    .innerHTML = "<p>" + q.question + "</p>";
  // document.getElementById("qImg")
  //   .innerHTML = "<img src=" + q.imgSrc + ">";
  document.getElementById("A")
    .innerHTML = q.choiceA;
  document.getElementById("B")
    .innerHTML = q.choiceB;
  document.getElementById("C")
    .innerHTML = q.choiceC;
}

function renderProgress() {
  for (let qIndex = 0; qIndex <= state.lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}

function renderCounter() {
  if (state.count <= state.questionTime) {
    counter.innerHTML = state.count;
    timeGauge.style.width = state.count * state.gaugeUnit + "px";
    state.count++
  } else {
    state.count = 0;
    // change progress color to red
    document.getElementById(state.runningQuestion).style.backgroundColor = "#f00";
    if (state.runningQuestion < state.lastQuestion) {
      state.runningQuestion++;
      renderQuestion();
    } else {
      // end the quiz and show the score
      clearInterval(TIMER);
      scoreRender();
    }
  }
}
