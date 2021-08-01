var area_1=document.querySelector('.area1');
var area_2=document.querySelector('.area2');
var area_3=document.querySelector('.area3')
var option1=document.querySelector('#radio1');
var option2=document.querySelector('#radio2');
var option3=document.querySelector('#radio3');


area_1.style.display="none";
area_2.style.display="none";
area_3.style.display="none";




option1.addEventListener('change',()=>{
    area_2.style.display="none";
    area_3.style.display="none";

    area_1.style.display="block";
    var btn_area1=document.querySelector('#btn_area1');
    btn_area1.addEventListener('click',calcArea1);

});

option2.addEventListener('change',()=>{
    area_1.style.display="none";
    area_3.style.display="none";

    area_2.style.display="block";
    var btn_area2=document.querySelector('#btn_area2');
    btn_area2.addEventListener('click',calcArea2);

});

option3.addEventListener('change',()=>{
    area_1.style.display="none";
    area_2.style.display="none";
    area_3.style.display="block";

    var btn_area3=document.querySelector('#btn_area3');
    btn_area3.addEventListener('click',calcArea3);

});

function calcArea1(){
    var output=document.querySelector('#output-area1');
    var base=parseFloat(document.querySelector('#base').value);
    var height=parseFloat(document.querySelector('#height').value);
    var area1=(0.5*base*height);
    output.innerText=area1.toFixed(2);

}

function calcArea2(){
    var output=document.querySelector('#output-area2');
    var a=parseFloat(document.querySelector('#side1').value);
    var b=parseFloat(document.querySelector('#side2').value);
    var c=parseFloat(document.querySelector('#side3').value);

    var s=(a+b+c)/2;
    var area2=Math.sqrt(s*(s-a)*(s-b)*(s-c));
    output.innerText=area2.toFixed(2);

}

function calcArea3(){
    var output=document.querySelector('#output-area3');
    var a=parseFloat(document.querySelector('#a1').value);
    var b=parseFloat(document.querySelector('#a2').value);
    var c=parseFloat(document.querySelector('#angle').value);
    
    output.innerText=(a*b*Math.sin(c*Math.PI/180))/2;

}
