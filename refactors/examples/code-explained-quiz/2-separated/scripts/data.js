'use strict';
// create our questions
const state = {
  count: 0,
  runningQuestion: 0,
  questionTime: 10,
  gaugeWidth: 150,
  get gaugeUnit() {
    return this.gaugeWidth / this.questionTime;
  },
  get lastQuestion() {
    return this.questions.length - 1;
  },
  TIMER: undefined,
  score: 0,
  questions: [
    {
      question: "What does HTML stand for?",
      imgSrc: "img/html.png",
      choiceA: "Correct",
      choiceB: "Wrong",
      choiceC: "Wrong",
      correct: "A"
    },
    {
      question: "What does CSS stand for?",
      imgSrc: "img/css.png",
      choiceA: "Wrong",
      choiceB: "Correct",
      choiceC: "Wrong",
      correct: "B"
    },
    {
      question: "What does JS stand for?",
      imgSrc: "img/js.png",
      choiceA: "Wrong",
      choiceB: "Wrong",
      choiceC: "Correct",
      correct: "C"
    }
  ]
};
