document.querySelector('#enterValue').addEventListener('click',inputData);
function inputData(){
     document.getElementById('enterValue').style.borderColor = "blue";
     document.getElementById('enterValue').style.transition = "0.57s";
     document.getElementById('enterValue1').style.borderColor = "";
}
document.querySelector('#enterValue1').addEventListener('click',inputData1);
function inputData1(){
     document.getElementById('enterValue1').style.borderColor = "blue";
     document.getElementById('enterValue1').style.transition = "0.57s";
     document.getElementById('enterValue').style.borderColor = "";
}

