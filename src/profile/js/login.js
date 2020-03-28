
// this part of code contains toggleing display of signin and signup block

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

// SIGN-IN PART 
// this part of code contains displaying the input border style animation  

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

              


// SIGN-UP PART 
// this part of code contains displaying the input border style animation 

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


// SIGN-IN part 
/* this part of code contains animating the input border line to red and displaying the error message 
     if input fields are left unfilled */    

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


// SIGN-UP PART
/* this part of code contains animating the input border line to red and displaying the error message 
     if input fields are left unfilled */  

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


// this is the part of code containing J-QUERY
/* this part of code will display the forgot password content and will genereate the OTP 
    if the input phone number is entered or will display the error message if input filled is left empty*/  

document.querySelector('#forgot-password').addEventListener('click',forgotPasswordNewPage);
function forgotPasswordNewPage(){
    $('.forgot-password-page').show();
    $('.body-container').hide();
    $('#loading-gif-for-OTP').hide();
}

$('#OTP-generating-btn').click(function(){
    let mobileNumValue = document.getElementById('forgot-password-mobile-no-input').value;
    if((mobileNumValue != 0)){
            $('.forgot-password-page').css('opacity',0.3);
            $('#loading-gif-for-OTP').css({display:'block',opacity:1});
            setTimeout(afterLoading,2000);
            function afterLoading(){
            {
               
            $('#loading-gif-for-OTP').css({display:'none'});
            }{
            $('#forgot-password-OTP-message').css('display','block');
            let OTPnumber = Math.floor((Math.random() * 1000000) + 1);
            document.getElementById('forgot-display-hidden-error-message').style.display = "none";
            alert('your one time password is: ' + OTPnumber);
             $('.forgot-password-page').css('opacity',1);
            }
            }
    }
    else if(mobileNumValue != 'e'){
        document.getElementById('forgot-display-hidden-error-message').style.display = "block";
        $('#forgot-password-OTP-message').css('display','none');

    }
    else{
        $('#forgot-password-OTP-message').css('display','none');
        document.getElementById('forgot-display-hidden-error-message').style.display = "block";
    }
})
$('#forgot-page-to-main-page-btn').click(function(){
    $('.forgot-password-page').hide();
    $('.body-container').show();
})