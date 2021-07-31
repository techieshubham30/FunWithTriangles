var angle=document.querySelector('#btn');
angle.addEventListener('click',checkAngle);
function checkAngle(){
    var inpt1=parseInt(document.querySelector('.inpt1').value);
    var inpt2=parseInt(document.querySelector('.inpt2').value);
    var inpt3=parseInt(document.querySelector('.inpt3').value);
    var output=document.querySelector('.output');
    var anglesum=inpt1+inpt2+inpt3;

    if(anglesum==180){
        output.innerText="Yuhu! these angles can make a triangle";

    }else{
       output.innerText="Oops! these angles cannot make a triangle";
    }

}

function calcHypo(){
    var a=parseInt(document.querySelector('.side1').value);
    var b=parseInt(document.querySelector('.side2').value);

    a=a*a;
    b=b*b;
    var c=a+b;
    document.querySelector('#hypo-output').innerText=Math.sqrt(c);
    

}