var hypo=document.querySelector('.hypo-btn');
hypo.addEventListener('click',calcHypo);

function calcHypo(){
    var a=parseInt(document.querySelector('.side1').value);
    var b=parseInt(document.querySelector('.side2').value);

    a=a*a;
    b=b*b;
    var c=a+b;
    document.querySelector('#hypo-output').innerText=Math.sqrt(c).toFixed(2);
    

}
