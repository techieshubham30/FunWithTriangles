const inputs = document.querySelectorAll('.input');
const outputEle = document.querySelector('.output');
const submitBtn = document.querySelector('#btn');

function isTriangle() {
    let sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if (sumOfAngles === 180) {
        outputEle.innerText = "Yuhu! these angles can make a triangle";
    } else {
        outputEle.innerText = "Oops! these angles cannot make a triangle";
    }
}

function calculateSumOfAngles(angle1, angle2, angle3) {
    let sumOfAngles = angle1 + angle2 + angle3;
    return (sumOfAngles);
}
submitBtn.addEventListener("click", isTriangle);