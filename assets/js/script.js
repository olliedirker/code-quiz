function startQuiz() {
    question()
    console.log('start button working')
}


var startBtn = document.querySelector("#startButton")
startBtn.addEventListener("click", startQuiz);
var answer = document.querySelector("#quizPage")
//nextQuestion execute the hide and reveal animations
answer.addEventListener("click", nextQuestion)



function question() {
    
}

function nextQuestion(event){
console.log(event.target.classList[1]);

if(event.target.classList[1] === "incorrect")
console.log('clicking an incorrect answer works')
else(event.target.classList[1] === "correct")
console.log('clicking correct works')
}



