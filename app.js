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
})

//When answer is checked change back-color and font-color


// All quiz data 50 question
const question = [
{question:"Q1) What does HTML stand for?", correct:"", answers:{a:"", b:"", c:""

}},

{question:"", correct:"", answers:{a:"", b:"", c:""

}},
{question:"", correct:"", answers:{a:"", b:"", c:""

}},
{question:"", correct:"", answers:{a:"", b:"", c:""

}},
]
