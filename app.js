//selecting element from HTML

const startBtn = document.getElementById("start-btn");
const introPage = document.getElementById("wellPage");
const quizSection = document.getElementById("quizContainer");
const darkMode = document.getElementById("modeToggle");
const dvdCircle =document.querySelector(".dvd-cricle");

startBtn.addEventListener("click", () =>{
    introPage.style.display = "none"; //this hide inroPage when start button is clicked
    quizSection.style.display = "block"; // this shows quiz section when button is clicked
    darkMode.style.display =  "block";
    dvdCircle.style.display = "block";

    startQuiz();
})

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
  }
];



// Get DOM elements (declare once)
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const questionNumEl = document.getElementById("questionNum");

// Quiz state
let currentQuestion = 0;
let score = 0;

// show question function
function showQuestion() {
    // cear previous answers
    answersEl.innerHTML = "";

    const currentQ = quizData[currentQuestion];

    // show question number and text
    questionNumEl.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
    questionEl.textContent = currentQ.question;

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
}

// answer selection
function selectAnswer(selectedOption) {
    const correct = quizData[currentQuestion].correct;
    if (selectedOption === correct) {
        score++;
    }

    // disable all buttons after selection
    Array.from(answersEl.children).forEach(btn => {
        btn.disabled = true;

        // highlight correct and incorrect
        if (btn.dataset.option === correct) {
            btn.style.backgroundColor = "green";
        } else if (btn.dataset.option === selectedOption) {
            btn.style.backgroundColor = "red";
        }
    });

    // show next button after user select answer
    nextBtn.style.display = "block";
}
