const questions = [
  {
    question: "Identify this planet in the image.",
    image: "mars-7292339_640.webp", // Replace with a real image URL
    options: ["Mars", "Jupiter", "Saturn", "Neptune"],
    correct: 0
  },
  {
    question: "Watch this video and answer: Which rocket is this?",
    video: "Free Falcon 9 Stock Video Footage Download 4K  HD Clips.mp4", // Replace with a real video URL
    options: ["Falcon 9", "Ariane 5", "Soyuz", "Saturn V"],
    correct: 0
  },
  {
    question: "Who was the first person to walk on the Moon?",
    options: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Alan Shepard"],
    correct: 1
  },
  {
      question: "What is the primary purpose of the James Webb Space Telescope?",
      options: [
        "Study Earth's atmosphere",
        "Observe the early universe and distant galaxies",
        "Detect asteroids near Earth",
        "Monitor the Sun's activity"
      ],
      correct:1
  },
  {
      question: "What type of propulsion system is used in NASA's Parker Solar Probe to maintain its trajectory near the Sun?",
      options: [
        "Chemical propulsion",
        "Solar sail",
        "Ion thrusters",
        "Hydrazine thrusters"
      ],
    correct:3
    },
    {
      question: "Which company was the first to successfully reuse an orbital-class rocket?",
      options: [
        "SpaceX",
        "Blue Origin",
        "Boeing",
        "Virgin Galactic"
      ],
     correct:0
    },
    {
      question: "What is the main purpose of the Lunar Gateway, currently being developed by NASA?",
      options: [
        "A permanent base on the Moon",
        "A staging point for lunar and deep-space missions",
        "A new Earth observation platform",
        "A space station for asteroid mining"
      ],
      correct:1
    },
    {
      question: "The Event Horizon Telescope (EHT) captured the first-ever image of what astronomical phenomenon?",
      options: [
        "A supernova explosion",
        "A black hole",
        "A neutron star",
        "A galaxy merger"
      ],
      correct:1
    },
    {
      question: "What is the primary material used for the heat shield of SpaceX's Starship spacecraft?",
      options: [
        "Titanium",
        "Stainless steel",
        "Carbon composite",
        "Aluminum alloy"
      ],
      correct:1
    },
    {
      question: "Which space mission successfully landed a rover on Mars in February 2021?",
      options: [
        "Mars Express",
        "Mars Pathfinder",
        "Perseverance",
        "Curiosity"
      ],
      correct:2
    },
    {
      question: "Which satellite navigation system is operated by the European Union?",
      options: [
        "GPS",
        "GLONASS",
        "Galileo",
        "Beidou"
      ],
      correct:2
    },
    {
      question: "What is the name of the rocket that launched the first crewed mission to the International Space Station by a private company?",
      options: [
        "Falcon 9",
        "Atlas V",
        "Soyuz MS-16",
        "Delta IV Heavy"
      ],
      correct:0
    },
    {
      question: "Which international organization is responsible for coordinating satellite frequencies to avoid interference?",
      options: [
        "ITU",
        "NASA",
        "ESA",
        "ISRO"
      ],
      correct:0
    },
    {
      question: "Identify the part name which is missing in the image.",
      image: "OIP.jpeg", // Replace with a real image URL
      options: ["Long life fuel type","Solid rocket booster","Orbiter","Payload bay"],
      correct: 0
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const quizBox = document.getElementById("quiz-box");
const scoreEl = document.getElementById("score");
const totalQuestionsEl = document.getElementById("total-questions");
const feedbackEl = document.getElementById("feedback");
const restartBtn = document.getElementById("restart-btn");

function showQuestion() {
const currentQuestion = questions[currentQuestionIndex];
optionsEl.innerHTML = "";

// Display the question with an image or video if available
if (currentQuestion.image) {
  questionEl.innerHTML = `${currentQuestion.question}<br>
    <img src="${currentQuestion.image}" alt="Quiz Image" class="quiz-image">`;
} else if (currentQuestion.video) {
  questionEl.innerHTML = `${currentQuestion.question}<br>
    <video src="${currentQuestion.video}" controls class="quiz-video"></video>`;
} else {
  questionEl.innerText = currentQuestion.question;
}

// Render options
currentQuestion.options.forEach((option, index) => {
  const button = document.createElement("button");
  button.innerText = option;
  button.addEventListener("click", () => selectOption(index));
  optionsEl.appendChild(button);
});
}

function selectOption(selectedIndex) {
const currentQuestion = questions[currentQuestionIndex];
if (selectedIndex === currentQuestion.correct) {
  score++;
}
nextBtn.style.display = "block";
}

function nextQuestion() {
currentQuestionIndex++;
nextBtn.style.display = "none";

if (currentQuestionIndex < questions.length) {
  showQuestion();
} else {
  showResult();
}
}

function showResult() {
quizBox.style.display = "none";
resultBox.style.display = "block";
scoreEl.innerText = score;
totalQuestionsEl.innerText = questions.length;

// Display feedback based on the score
if (score === questions.length) {
  feedbackEl.innerText = "Excellent! You got all questions correct!";
} else if (score > questions.length / 2) {
  feedbackEl.innerText = "Great job! You did well!";
} else {
  feedbackEl.innerText = "Keep trying! Better luck next time!";
}
}

function restartQuiz() {
currentQuestionIndex = 0;
score = 0;
resultBox.style.display = "none";
quizBox.style.display = "block";
showQuestion();
}

function startQuiz() {
// Hide the start button and show the quiz box
document.getElementById("start-btn").style.display = "none";
quizBox.style.display = "block";
showQuestion();
}

// Event Listeners
document.getElementById('start-btn').addEventListener('click', startQuiz);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", restartQuiz);

// Initially hide the quiz box
quizBox.style.display = "none";
resultBox.style.display = "none";
