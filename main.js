let questionList = [
  {
    question: "Which year did JavaScript born?",
    a: 1993,
    b: 1995,
    c: 2000,
    d: "None of above answers",
    correct: "b",
  },
  {
    question: "Who is the founder of Tesla?",
    a: "Ilon mask",
    b: "Donald trump",
    c: "John cina",
    d: "Pop",
    correct: "a",
  },
  {
    question: "What is 'HTML' stand for",
    a: "Hyper time market laps",
    b: "Hyper text markup language",
    c: "Hype tuning machine language",
    d: "None of above",
    correct: "b",
  },
  {
    question: "Which one is the most popular language?",
    a: "Python",
    b: "Kotlin",
    c: "JS",
    d: "Css",
    correct: "c",
  },
  {
    question: "Who is US president at 2021?",
    a: "Pop",
    b: "Trump",
    c: "Ahmadi nejat",
    d: "Baiden",
    correct: "d",
  },
  {
    question: "Where is IRAN?",
    a: "Europe",
    b: "America",
    c: "Asia",
    d: "Africa",
    correct: "c",
  },
  {
    question: "Which one is king of the jungle?",
    a: "Lion",
    b: "Tiger",
    c: "Donkey",
    d: "Monkey",
    correct: "a",
  },
  {
    question: "What is the most saled phone in 2021?",
    a: "Iphone 13 promax",
    b: "S21 ultra",
    c: "Nokia 1100",
    d: "none",
    correct: "a",
  }
];

const questionPlace = document.getElementById("question");
const answerA = document.getElementById("text_a");
const answerB = document.getElementById("text_b");
const answerC = document.getElementById("text_c");
const answerD = document.getElementById("text_d");
const submitBtn = document.getElementById("submit__btn");
const answers = document.querySelectorAll(".answerList");
const header = document.querySelector(".header__wrapper");

let questionNumber = 0;
let score = 0;

function start() {
  answers.forEach((answer) => {
    answer.checked = false;
  });
  questionPlace.innerText = questionList[questionNumber].question;
  answerA.innerText = questionList[questionNumber].a;
  answerB.innerText = questionList[questionNumber].b;
  answerC.innerText = questionList[questionNumber].c;
  answerD.innerText = questionList[questionNumber].d;
}

start();

submitBtn.addEventListener("click", submit);

function submit() {
  let ifChoose = false;
  let choosen = undefined;
  answers.forEach((answer) => {
    if (answer.checked) {
      ifChoose = true;
      return (choosen = answer);
    }
  });
  if (ifChoose) {
    if (choosen.value === questionList[questionNumber].correct) {
      score++;
    }
    questionNumber++;
    if (questionNumber < questionList.length) {
      start();
    } else {
      header.innerHTML = `You answered ${score} correctly out of ${questionList.length}`;
      header.style.fontSize = "3rem";
      submitBtn.innerText = `RELOAD`;
      submitBtn.setAttribute("onclick", "reload()");
    }
  }
}

function reload() {
  location.reload();
}
