
document.querySelector('#submitBtn').addEventListener('click',btnClick)
function btnClick(e){
let inputData = document.getElementById("userName").value;
let inputPassword = document.getElementById("passcode").value;
alert("name: " + inputData + " password: " + inputPassword);
}
document.querySelector('#link').addEventListener('click' , linkCall)
function linkCall(){
    document.querySelector('.hidden-content-box').style.display = "block";
    document.querySelector('.content-box').style.display = "none";
}