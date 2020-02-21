document.querySelector("#sign-up-btn").addEventListener('click',signUpBtn);
function signUpBtn(){
    document.querySelector(".sub-main-section-content").style.display = "none";
    document.querySelector(".hidden-sign-up-section").style.display = "block";
    document.querySelector(".floating-content-in-header").style.display = "none";
}
document.querySelector("#login-back").addEventListener('click',loginBackBtn);
function loginBackBtn(){
    document.querySelector(".sub-main-section-content").style.display = "block";
    document.querySelector(".hidden-sign-up-section").style.display = "none";
    document.querySelector(".floating-content-in-header").style.display = "block";
}
document.querySelector('#mail-id-input').addEventListener('click',mailidinputresponse);
function mailidinputresponse(){
    document.getElementById('mail-id-input').style.borderColor = "blue";
    document.getElementById('mail-id-input').style.transition = "0.57s";
    document.getElementById('password-input').style.borderColor = "";
}
document.querySelector('#password-input').addEventListener('click',passwordinputresponse);
function passwordinputresponse(){
    document.getElementById('password-input').style.borderColor = "blue";
    document.getElementById('password-input').style.transition = "0.57s";
    document.getElementById('mail-id-input').style.borderColor = "";
}
document.querySelector('#mail-id-hidden-section-input').addEventListener('click',hiddeninputmail);
function hiddeninputmail(){
    document.getElementById('mail-id-hidden-section-input').style.borderColor = "blue";
    document.getElementById('mail-id-hidden-section-input').style.transition = "0.57s";
    document.getElementById('mobile-number-hidden-section-input').style.borderColor = "";
}
document.querySelector('#mobile-number-hidden-section-input').addEventListener('click',hiddeninputpassword);
function hiddeninputpassword(){
    document.getElementById('mobile-number-hidden-section-input').style.borderColor = "blue";
    document.getElementById('mobile-number-hidden-section-input').style.transition = "0.57s";
    document.getElementById('mail-id-hidden-section-input').style.borderColor = "";
}
document.querySelector('#submit-login-btn').addEventListener('click',addingEffects);
function addingEffects(){
    const mailIdValue = document.getElementById('mail-id-input').value;
    const passwordValue = document.getElementById('password-input').value;
    if((mailIdValue == 0) && (passwordValue == 0)){
        document.getElementById('mail-id-input').style.borderColor = "red";
        document.getElementById('mail-id-input').style.transition = "0.57s";
        document.getElementById('password-input').style.borderColor = "red";
        document.getElementById('password-input').style.transition = "0.57s";
        document.getElementById('display-error-message').style.display = "block";
    }
    else if((mailIdValue == 0) && (passwordValue != 0)){
        document.getElementById('mail-id-input').style.borderColor = "red";
        document.getElementById('mail-id-input').style.transition = "0.57s";
        document.getElementById('display-error-message').style.display = "block";

    }
    else if((mailIdValue != 0) && (passwordValue == 0)){
        document.getElementById('password-input').style.borderColor = "red";
        document.getElementById('password-input').style.transition = "0.57s";
        document.getElementById('display-error-message').style.display = "block";

    }
    else{
        document.getElementById('display-error-message').style.display = "none";
        alert('all good!!');
    }
}
// SEE IF U CAN USE DISPLAY-ERROR-MESSAGE INSTEAD OF USIN HIDDEN IN THE BELOW CODE

document.querySelector('#signup-login-btn').addEventListener('click',addingSignUpEffects);
function addingSignUpEffects(){
    const mailIdValue = document.getElementById('mail-id-hidden-section-input').value;
    const passwordValue = document.getElementById('mobile-number-hidden-section-input').value;
    if((mailIdValue == 0) && (passwordValue == 0)){
        document.getElementById('mail-id-hidden-section-input').style.borderColor = "red";
        document.getElementById('mail-id-hidden-section-input').style.transition = "0.57s";
        document.getElementById('mobile-number-hidden-section-input').style.borderColor = "red";
        document.getElementById('mobile-number-hidden-section-input').style.transition = "0.57s";
        document.getElementById('display-hidden-error-message').style.display = "block";

    }
    else if((mailIdValue == 0) && (passwordValue != 0)){
        document.getElementById('mail-id-hidden-section-input').style.borderColor = "red";
        document.getElementById('mail-id-hidden-section-input').style.transition = "0.57s";
        document.getElementById('display-hidden-error-message').style.display = "block";

    }
    else if((mailIdValue != 0) && (passwordValue == 0)){
        document.getElementById('mobile-number-hidden-section-input').style.borderColor = "red";
        document.getElementById('mobile-number-hidden-section-input').style.transition = "0.57s";
        document.getElementById('display-hidden-error-message').style.display = "block";

    }
    else{
        alert('all good!!');
        document.getElementById('display-hidden-error-message').style.display = "none";

    }
}

//------------------------------------------------------------------//
document.querySelector('#forgot-password').addEventListener('click',forgotPasswordNewPage);
function forgotPasswordNewPage(){
    $('.forgot-password-page').show();
    $('a#forgot-password').attr('target','_blank')
}
// WORK IN PROGRESS//