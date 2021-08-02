var quiz_btn=document.querySelector('.button');
quiz_btn.addEventListener('click',check);

function check(){
    var bgclr1=document.querySelector('#ques1');
    var bgclr2=document.querySelector('#ques2');
    var bgclr3=document.querySelector('#ques3');
    var bgclr4=document.querySelector('#ques4');
    var bgclr5=document.querySelector('#ques5');
    var bgclr6=document.querySelector('#ques6');
    var bgclr7=document.querySelector('#ques7');
    var bgclr8=document.querySelector('#ques8');
    var bgclr9=document.querySelector('#ques9');
    var bgclr10=document.querySelector('#ques10');

    var quizoutput=document.querySelector('#quiz-output');
    var cnt=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var q6=document.quiz.question6.value;
    var q7=document.quiz.question7.value;
    var q8=document.quiz.question8.value;
    var q9=document.quiz.question9.value;
    var q10=document.quiz.question10.value;
    if(q1=="yes"){
        ++cnt;
        bgclr1.style.backgroundColor="green";

    }else{
        bgclr1.style.backgroundColor="red";
    }
    if(q2=="no"){
        ++cnt;
        bgclr2.style.backgroundColor="green";

    }else{
        bgclr2.style.backgroundColor="red";

    }
    if(q3=="yes"){
        ++cnt;
        bgclr3.style.backgroundColor="green";

    }else{
        bgclr3.style.backgroundColor="red";
    }

    if(q4=="yes"){
        ++cnt;
        bgclr4.style.backgroundColor="green";

    }else{
        bgclr4.style.backgroundColor="red";

    }
    if(q5=="yes"){
        ++cnt;
        bgclr5.style.backgroundColor="green";

    }else{
        bgclr5.style.backgroundColor="red";

    }

    if(q6=="Isosceles"){
        ++cnt;
        bgclr6.style.backgroundColor="green";

    }else{
        bgclr6.style.backgroundColor="red";

    }

    if(q7=="30"){
        ++cnt;
        bgclr7.style.backgroundColor="green";

    }else{
        bgclr7.style.backgroundColor="red";


    }

    
    if(q8=="Both"){
        ++cnt;
        bgclr8.style.backgroundColor="green";

    }else{
        bgclr8.style.backgroundColor="red";

    }

    
    if(q9=="5cm"){
        ++cnt;
        bgclr9.style.backgroundColor="green";

    }else{
        bgclr9.style.backgroundColor="red";

    }

    
    if(q10=="Scalene"){
        ++cnt;
        bgclr10.style.backgroundColor="green";

    }else{
        bgclr10.style.backgroundColor="red";

    }

    quizoutput.innerText=`your score : ${cnt} out of 10`;
    
}