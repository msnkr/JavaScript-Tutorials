let countdownElem = document.querySelector(".countdown-number");
let modeElem = document.querySelector(".mode");
let questionElem = document.querySelector(".is-true");

const trueBtn = document.querySelector(".true");
const falseBtn = document.querySelector(".false");

let difficulty = "easy";
let questionList = [];

function showQuestion(questionsList) {
  questionsList.forEach((question) => {
    modeElem.innerHTML = `${question.difficulty}`;
    questionElem.innerHTML = `${question.question}`;
    console.log(question);
  });
}

async function getQuestions(difficulty) {
  const response = await fetch(
    `https://opentdb.com/api.php?amount=10&category=9&difficulty=${difficulty}&type=boolean`
  );
  const jsonData = await response.json();
  questionList = jsonData.results;
  showQuestion(questionList);
}

getQuestions(difficulty);
// Get all questions and answers from api.
// Create a object that takes the question and the answer and pushes it to the list.
// Loop through each question and wait for a button press. If button press == objects answer then increase the count. If it doesn't then its a fail and reset the count.
// When all 10 questions are answered. Increase the difficulty and ask another 10 questions on a higher difficulty.
