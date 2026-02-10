//selecting element from HTML

const startBtn = document.getElementById("start-btn");
const introPage = document.getElementById("wellPage");
const quizSection = document.getElementById("quizContainer");
const darkMode = document.getElementById("modeToggle");
const dvdCircle =document.querySelector(".dvd-cricle");


// dark mode toggle
const toggleBtn = document.getElementById("modeToggle");


if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️"; 
}

// toggle dark/light mode
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "☀️"; // sun icon
    } else {
        localStorage.setItems("theme", "light");
        toggleBtn.textContent = "🌙"; // moon icon
    }
});

// total quiz timer 8:20min
let totalTimeLeft = 500
let totalTimer;

//timer per question
let questionTimeLeft = 10;
let questionTimer;

startBtn.addEventListener("click", () => {

    const nameInput = document.getElementById("username").value.trim();

    if (nameInput === "") {
        alert("Please enter your name before starting 😊");
        return;
    }

    username = nameInput; // save username

    introPage.style.display = "none";
    quizSection.style.display = "block";
    darkMode.style.display = "block";
    dvdCircle.style.display = "block";

    startQuiz();
    startTotalTimer();
});


//When answer is checked change back-color and font-color
document.addEventListener("DOMContentLoaded", () => {
  const answers = document.querySelectorAll(".answer");
  let isLocked = false;

  answers.forEach(answer => {
    answer.addEventListener("click", () => {
      if (isLocked) return;

      answer.classList.add("active");

      answers.forEach(a => a.classList.add("locked"));
      isLocked = true;
    });
  });
});


// funtion for total time of quiz
function startTotalTimer() {
    const totalTimerEl = document.getElementById("totalTimer");

    let minutes = Math.floor(totalTimeLeft / 60);
    let seconds = totalTimeLeft % 60;
    totalTimerEl.textContent = `Total time: ${minutes}:${seconds.toString().padStart(2, "0")}`;

    totalTimer = setInterval(() => {
        totalTimeLeft--;
        minutes = Math.floor(totalTimeLeft / 60);
        seconds = totalTimeLeft % 60;
        totalTimerEl.textContent = `Total time: ${minutes}:${seconds.toString().padStart(2, "0")}`;

        if (totalTimeLeft <= 0) {
            clearInterval(totalTimer);
            clearInterval(questionTimer);
            endQuiz(); // stop quiz automatically
        }
    }, 1000);
}



// per question for quiz timer
 function startQuestionTimer() {
    clearInterval(questionTimer);

    questionTimeLeft = 10; 
    const timerEl = document.getElementById("timer");
    timerEl.textContent = "10s";

    questionTimer = setInterval(() => {
        questionTimeLeft--;
        timerEl.textContent = `${questionTimeLeft}s`;

        if (questionTimeLeft <= 0) {
            clearInterval(questionTimer);

            const correct = quizData[currentQuestion].correct;

            // mark as failed
            Array.from(answersEl.children).forEach(btn => {
                btn.disabled = true;
                if (btn.dataset.option === correct) {
                    btn.classList.add("correct");
                } else {
                    btn.classList.add("wrong");
                }
            });

            // auto move to next question
            setTimeout(() => {
                goToNextQuestion();
            }, 800);
        }
    }, 1000);
}

// shuffle quiz randomly on every users
function shuffleArray(array) {
    // Fisher–Yates shuffle
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


// All quiz data 50 question
const quizData = [
  {
    question: "What does HTML stand for?",
    correct: "a",
    answers: {
      a: "Hyper Text Markup Language",
      b: "High Text Machine Language",
      c: "Hyper Tool Multi Language"
    }
  },
  {
    question: "Which CSS property changes text color?",
    correct: "c",
    answers: {
      a: "font-color",
      b: "text-color",
      c: "color"
    }
  },
  {
    question: "Which symbol is used for JavaScript comments?",
    correct: "b",
    answers: {
      a: "<!-- -->",
      b: "//",
      c: "**"
    }
  },
  {
    question: "Which HTML tag is used for the largest heading?",
    correct: "b",
    answers: {
      a: "<h6>",
      b: "<h1>",
      c: "<head>"
    }
  },
  {
    question: "Which operator checks value and type in JavaScript?",
    correct: "c",
    answers: {
      a: "==",
      b: "=",
      c: "==="
    }
  },
  {
    question: "How do you select a class in CSS?",
    correct: "b",
    answers: {
      a: "#class",
      b: ".class",
      c: "class"
    }
  },
  {
    question: "Which HTML attribute specifies an image source?",
    correct: "c",
    answers: {
      a: "href",
      b: "alt",
      c: "src"
    }
  },
  {
    question: "Which JavaScript method logs output to console?",
    correct: "b",
    answers: {
      a: "print()",
      b: "console.log()",
      c: "log.console()"
    }
  },
  {
    question: "Which CSS property controls spacing inside an element?",
    correct: "b",
    answers: {
      a: "margin",
      b: "padding",
      c: "border"
    }
  },
  {
    question: "Which HTML tag creates a hyperlink?",
    correct: "b",
    answers: {
      a: "<link>",
      b: "<a>",
      c: "<href>"
    }
  },
  {
    question: "Which JavaScript keyword declares a variable?",
    correct: "c",
    answers: {
      a: "let",
      b: "var",
      c: "Both a and b"
    }
  },
  {
    question: "Which CSS value hides an element?",
    correct: "c",
    answers: {
      a: "display: block",
      b: "visibility: show",
      c: "display: none"
    }
  },
  {
    question: "Which tag is used to define a form?",
    correct: "b",
    answers: {
      a: "<input>",
      b: "<form>",
      c: "<fieldset>"
    }
  },
  {
    question: "Which JavaScript loop runs at least once?",
    correct: "c",
    answers: {
      a: "for",
      b: "while",
      c: "do...while"
    }
  },
  {
    question: "Which CSS property rounds element corners?",
    correct: "a",
    answers: {
      a: "border-radius",
      b: "corner-radius",
      c: "radius"
    }
  },
  {
    question: "Which HTML tag inserts a line break?",
    correct: "c",
    answers: {
      a: "<lb>",
      b: "<break>",
      c: "<br>"
    }
  },
  {
    question: "How do you write an alert in JavaScript?",
    correct: "c",
    answers: {
      a: "msg('Hi')",
      b: "popup('Hi')",
      c: "alert('Hi')"
    }
  },
  {
    question: "Which CSS unit is relative?",
    correct: "c",
    answers: {
      a: "px",
      b: "cm",
      c: "%"
    }
  },
  {
    question: "Which HTML tag is semantic?",
    correct: "c",
    answers: {
      a: "<div>",
      b: "<span>",
      c: "<article>"
    }
  },
  {
    question: "Which JavaScript event runs after page loads?",
    correct: "b",
    answers: {
      a: "ready()",
      b: "DOMContentLoaded",
      c: "start()"
    }
  },
  {
    question: "Which property sets background color in CSS?",
    correct: "b",
    answers: {
      a: "bgcolor",
      b: "background-color",
      c: "color-bg"
    }
  },
  {
    question: "Which HTML tag is used for JavaScript?",
    correct: "b",
    answers: {
      a: "<js>",
      b: "<script>",
      c: "<javascript>"
    }
  },
  {
    question: "Which method selects an element by ID?",
    correct: "b",
    answers: {
      a: "querySelectorAll()",
      b: "getElementById()",
      c: "getElementsByClassName()"
    }
  },
  {
    question: "Which CSS property makes text italic?",
    correct: "a",
    answers: {
      a: "font-style: italic",
      b: "text-italic",
      c: "italic: true"
    }
  },
  {
    question: "Which HTML input type hides characters?",
    correct: "b",
    answers: {
      a: "hidden",
      b: "password",
      c: "secure"
    }
  },
  {
    question: "Which keyword stops a loop in JavaScript?",
    correct: "b",
    answers: {
      a: "stop",
      b: "break",
      c: "exit"
    }
  },
  {
    question: "Which CSS property controls text size?",
    correct: "b",
    answers: {
      a: "text-style",
      b: "font-size",
      c: "size"
    }
  },
  {
    question: "Which tag is used to embed a video?",
    correct: "b",
    answers: {
      a: "<media>",
      b: "<video>",
      c: "<movie>"
    }
  },
  {
    question: "Which JavaScript method adds item to an array?",
    correct: "b",
    answers: {
      a: "add()",
      b: "push()",
      c: "insert()"
    }
  },
  {
    question: "Which CSS property adds shadow to text?",
    correct: "c",
    answers: {
      a: "box-shadow",
      b: "shadow-text",
      c: "text-shadow"
    }
  },
  {
    question: "Which HTML element contains metadata?",
    correct: "b",
    answers: {
      a: "<meta>",
      b: "<head>",
      c: "<body>"
    }
  },
  {
    question: "How do you convert string to number in JavaScript?",
    correct: "b",
    answers: {
      a: "parseText()",
      b: "Number()",
      c: "toString()"
    }
  },
  {
    question: "Which CSS property controls spacing outside an element?",
    correct: "b",
    answers: {
      a: "padding",
      b: "margin",
      c: "outline"
    }
  },
  {
    question: "Which HTML attribute opens link in new tab?",
    correct: "c",
    answers: {
      a: "open",
      b: "new",
      c: "target=\"_blank\""
    }
  },
  {
    question: "Which JavaScript data type does NOT exist?",
    correct: "c",
    answers: {
      a: "String",
      b: "Boolean",
      c: "Character"
    }
  },
  {
    question: "Which CSS position stays fixed on screen?",
    correct: "c",
    answers: {
      a: "absolute",
      b: "relative",
      c: "fixed"
    }
  },
  {
    question: "Which HTML tag creates an unordered list?",
    correct: "b",
    answers: {
      a: "<ol>",
      b: "<ul>",
      c: "<li>"
    }
  },
  {
    question: "Which JavaScript statement handles errors?",
    correct: "c",
    answers: {
      a: "error()",
      b: "debug()",
      c: "try...catch"
    }
  },
  {
    question: "Which CSS property transforms text to uppercase?",
    correct: "c",
    answers: {
      a: "font-case",
      b: "uppercase",
      c: "text-transform: uppercase"
    }
  },
  {
    question: "Which tag is used for audio files?",
    correct: "b",
    answers: {
      a: "<sound>",
      b: "<audio>",
      c: "<media>"
    }
  },
  {
    question: "Which JavaScript operator assigns value?",
    correct: "c",
    answers: {
      a: "==",
      b: "===",
      c: "="
    }
  },
  {
    question: "Which CSS layout is best for one-dimensional layout?",
    correct: "c",
    answers: {
      a: "Grid",
      b: "Float",
      c: "Flexbox"
    }
  },
  {
    question: "Which HTML tag defines a table row?",
    correct: "b",
    answers: {
      a: "<td>",
      b: "<tr>",
      c: "<th>"
    }
  },

   {
    question: "What is the main purpose of semantic HTML",
    correct: "b",
    answers: {
      a: "Browsers ignore all HTML errors",
      b: "To give meaning and structure to content",
      c: "To replace CSS styling"
    }
  },
   {
    question: "Why invalid HTML still works?",
    correct: "b",
    answers: {
      a: "Browsers ignore all HTML errors",
      b: "Browsers automatically correct HTML mistakes",
      c: "HTML errors only affect JavaScript"
    }
  },
   {
    question: " Which issue is most likely caused by using non-unique IDs in HTML?",
    correct: "b",
    answers: {
      a: " Page loading delay",
      b: "Unexpected JavaScript behavior",
      c: "CSS animations not working"
    }
  },
   {
    question: "Why does z-index sometimes fail to bring an element to the front? ",
    correct: "b",
    answers: {
      a: "The element has no color",
      b: "The element is inside a different stacking context",
      c: "The element uses flexbox"
    }
  },
   {
    question: " Why percentages differ in CSS?",
    correct: "b",
    answers: {
      a: " Percentages are calculated randomly",
      b: " Different reference",
      c: "Percentages only work in flex layouts"
    }
  },
   {
    question: " JS is single-threaded because?",
    correct: "a",
    answers: {
      a: "One main thread",
      b: " No async",
      c: "Slow"
    }
  },
   {
    question: "Event loop does what?",
    correct: "b",
    answers: {
      a: "Handle async",
      b: "Speed up JS",
      c: "Speed up JS"
    }
  }
];



// Get DOM elements (declare once)
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const questionNumEl = document.getElementById("questionNum");
const endBtn = document.getElementById("endBtn");
const totalQuiz = document.querySelector("#totalQuiz span");

// Quiz state
let username = "";
let currentQuestion = 0;
let score = 0;


// show question function
function showQuestion() {
    // cear previous answers
    answersEl.innerHTML = "";

    const currentQ = quizData[currentQuestion];
    totalQuiz.textContent = currentQuestion + 1;

    // show question number and text
    questionNumEl.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
    questionEl.textContent = currentQ.question;

//shuffle answers
const keys =
Object.keys(currentQ.answers);
shuffleArray(keys);


    // Create answer buttons 
    for (let key in currentQ.answers) {
        const btn = document.createElement("button");
        btn.textContent = currentQ.answers[key]; 
        btn.dataset.option = key;
        btn.classList.add("answer");
        btn.addEventListener("click", () => selectAnswer(key));
        answersEl.appendChild(btn);
    }

    // dide next button until users selecte an answer
    nextBtn.style.display = "none";
    startQuestionTimer();
}

// answer selection
function selectAnswer(selectedOption) {
    clearInterval(questionTimer);

    const correct = quizData[currentQuestion].correct;
    if (selectedOption === correct) {
        score++;
    }

    // disable all buttons after selection
    Array.from(answersEl.children).forEach(btn => {
        btn.disabled = true;

        // highlight correct and incorrect
        if (btn.dataset.option === correct) {
            //btn.style.backgroundColor = "green";
            btn.classList.add("correct")
        } else if (btn.dataset.option === selectedOption) {
            //btn.style.backgroundColor = "red";
             btn.classList.add("wrong")
        }
    });


    // show next button after user select answer
    nextBtn.style.display = "block";
}


//go to next question after timer
function goToNextQuestion() {
    clearInterval(questionTimer);

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

// next button click
nextBtn.addEventListener("click", () => {
    clearInterval (questionTimer); 
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        endQuiz();
    }
});

endBtn.addEventListener("click", () => {
endQuiz();
});

// End quiz
 function endQuiz() {
    clearInterval(totalTimer);
    clearInterval(questionTimer);

    // hide all other sections
    quizSection.style.display = "none";
    introPage.style.display = "none";
    darkMode.style.display = "none";
    dvdCircle.style.display = "none";

    const resultsPage = document.getElementById("resultPage");

    // apply styles via JS to center perfectly
    resultsPage.style.position = "fixed";  
    resultsPage.style.top = "0";
    resultsPage.style.left = "0";
    resultsPage.style.width = "100%";
    resultsPage.style.height = "100vh";   
    resultsPage.style.display = "flex";
    resultsPage.style.flexDirection = "column";
    resultsPage.style.justifyContent = "center";
    resultsPage.style.alignItems = "center";
    resultsPage.style.backgroundColor = "#1a1a1a"; 
    resultsPage.style.zIndex = "9999"; 
    resultsPage.classList.remove("hidden"); 

    
    const resultTitleEl = document.getElementById("resultTitle");
    const resultTextEl = document.getElementById("resultText");

    resultTitleEl.textContent = "Quiz Completed!";

    const percentage = (score / quizData.length) * 100;
    let resultMessage;

    if (percentage >= 80) resultMessage = "Excellent 🎉";
    else if (percentage >= 60) resultMessage = "Very Good 👍";
    else if (percentage >= 50) resultMessage = "Good 🙂";
    else if (percentage >= 40) resultMessage = "Fair 😐";
    else if (percentage >= 30) resultMessage = "Poor 😕";
    else resultMessage = "Very Poor ❌";

    resultTextEl.textContent = `Hey 👋 @${username} you scored ${score} / ${quizData.length} — ${resultMessage}`;

    // restart button
    const restartBtn = document.getElementById("restartBtn");
    restartBtn.addEventListener("click", () => location.reload());
}

// Start quiz
function startQuiz() {
    currentQuestion = 0;
    score = 0;

    shuffleArray(quizData)
    showQuestion();
    startQuestionTimer();

    
}

