let countdownElem = document.querySelector(".countdown-number");
let modeElem = document.querySelector(".mode");
let questionElem = document.querySelector(".is-true");

const trueBtn = document.querySelector(".true");
const falseBtn = document.querySelector(".false");

let difficulty = "easy";
let questionList = [];
let count = 0;

function updateDom(question) {
  modeElem.innerHTML = question.difficulty;
  questionElem.innerHTML = question.question;
  countdownElem.innerHTML = count;
}

function showQuestion(questionsList, count) {
  let question = questionList[count];
  updateDom(question);
}

async function getQuestions(difficulty) {
  const response = await fetch(
    `https://opentdb.com/api.php?amount=10&category=9&difficulty=${difficulty}&type=boolean`
  );
  const jsonData = await response.json();
  questionList = jsonData.results;
  showQuestion(questionList, count);
}

getQuestions(difficulty);
// Get all questions and answers from api.
// Create a object that takes the question and the answer and pushes it to the list.
// start the count at 0, if the count ++ then the question gets increased too. Otherwise clear the count, get a new list of questions and start again.
// When all 10 questions are answered. Increase the difficulty and ask another 10 questions on a higher difficulty.
