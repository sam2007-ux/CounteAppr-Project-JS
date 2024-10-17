// Counter Program

const decreaseBtn = document.getElementById("decreaseButton");
const resetBtn = document.getElementById("resetButton");
const increaseBtn = document.getElementById("increaseButton");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}




