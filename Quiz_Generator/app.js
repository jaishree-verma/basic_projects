const quiz = [
  {
    question: "Which is the largest ocean on Earth?",
    options: ["The Indian Ocean", "The Atlantic Ocean", "The Pacific Ocean", "The Arctic Ocean"],
    answer: 2,
    explanation: "The Pacific Ocean is the largest and deepest ocean on Earth."
  },
  {
    question: "What is the capital city of Japan?",
    options: ["Kyoto", "Osaka", "Hiroshima", "Tokyo"],
    answer: 3,
    explanation: "Tokyo is the capital city of Japan and one of the most populous metropolitan areas in the world."
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Saturn", "Jupiter"],
    answer: 1,
    explanation: "Mars is known as the Red Planet due to its reddish appearance caused by iron oxide."
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
    answer: 0,
    explanation: "William Shakespeare wrote 'Romeo and Juliet', one of his most famous tragedies."
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Go", "Ag", "Gd"],
    answer: 0,
    explanation: "The chemical symbol for gold is Au, derived from its Latin name 'Aurum'."
  }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function loadQuestion() {
  const q = quiz[current];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  resultEl.textContent = "";

  q.options.forEach((opt, i) => {
    const li = document.createElement("li");
    li.textContent = opt;
    li.onclick = () => checkAnswer(i);
    optionsEl.appendChild(li);
  });
}

function checkAnswer(selected) {
  const correct = quiz[current].answer;
  const explanation = quiz[current].explanation;

  if (selected === correct) {
    score++;
    resultEl.textContent = "✅ Correct! " + explanation;
  } else {
    resultEl.textContent = `❌ Incorrect. ${explanation}`;
  }

  Array.from(optionsEl.children).forEach((li, i) => {
    li.style.background = i === correct ? "#c8f7c5" : "#f8d7da";
    li.onclick = null;
  });

  nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
  current++;
  if (current < quiz.length) {
    loadQuestion();
    nextBtn.style.display = "none";
  } else {
    questionEl.textContent = "🎉 Quiz Completed!";
    optionsEl.innerHTML = "";
    resultEl.textContent = `You scored ${score} out of ${quiz.length}.`;
    nextBtn.style.display = "none";
  }
};

loadQuestion();
