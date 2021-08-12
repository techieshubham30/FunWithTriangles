const quizForm=document.querySelector('#quiz-form');
const submitAnswerBtn=document.querySelector('#submit-answer-btn');
const outputEle=document.querySelector('#quiz-output');
const questionContainer=document.querySelectorAll('.question-container');


const correctAnswer=["yes","no","yes","yes","yes","Isosceles","30","Both","5cm","Scalene"];

function calculateScore(){
    let score=0;
    let index=0;
    const formResult=new FormData(quizForm);
    for(let value of formResult.values()){
        if(value===correctAnswer[index]){
            score++;
            questionContainer[index].style.backgroundColor="#059669";
        }else{
            questionContainer[index].style.backgroundColor="#EF4444";
        }
        index++;
    }

    outputEle.innerText=`Your score : ${score} out of 10`;

}

submitAnswerBtn.addEventListener("click",calculateScore);

