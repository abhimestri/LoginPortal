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
document.querySelector('#enter-Value-hidden').addEventListener('click',inputDatahidden);
function inputDatahidden(){
     document.getElementById('enter-Value-hidden').style.borderColor = "blue";
     document.getElementById('enter-Value-hidden').style.transition = "0.57s";
     document.getElementById('enter-Value-hidden1').style.borderColor = "";
}
document.querySelector('#enter-Value-hidden1').addEventListener('click',inputDatahidden1);
function inputDatahidden1(){
     document.getElementById('enter-Value-hidden1').style.borderColor = "blue";
     document.getElementById('enter-Value-hidden1').style.transition = "0.57s";
     document.getElementById('enter-Value-hidden').style.borderColor = "";
}

document.querySelector('#upperSegmentBtn').addEventListener('click',signUp);
function signUp(){
   let details = document.querySelector('.fillDetails');
   details.style.display = "none";
   let hiddendetails = document.querySelector('.hiddenDetails');
   hiddendetails.style.display = "block";
}
document.querySelector('#login-Back').addEventListener('click',loginBack);
function loginBack(){
    let details = document.querySelector('.fillDetails');
   details.style.display = "block";
   let hiddendetails = document.querySelector('.hiddenDetails');
   hiddendetails.style.display = "none";
}
 
    document.querySelector('#formSubmitBtn').addEventListener('click',signInSubmit);
    function signInSubmit(e){

        let emailValue = document.getElementById('enterValue').value;
        let emailValue1 = document.getElementById('enterValue1').value;
      
        if(emailValue == 0){
                document.getElementById('hidden-message').style.display = 'block';   
                document.getElementById('enterValue1').style.borderColor = "blue";
                document.getElementById('enterValue1').style.transition = "0.57s";
                document.getElementById('enterValue').style.borderColor = "red";
                document.getElementById('enterValue').style.transition = "0.57s";
             
        }
        else if(emailValue1 == 0){
                document.getElementById('hidden-message').style.display = 'block';
                document.getElementById('enterValue').style.borderColor = "blue";
                document.getElementById('enterValue').style.transition = "0.57s";
                document.getElementById('enterValue1').style.transition = "0.57s";
                document.getElementById('enterValue1').style.borderColor = "red";
        }  
        else if((emailValue && emailValue1) == 0){
            let nameOfUser = document.querySelector('.user-input-hidden');
            nameOfUser.style.borderColor = "red";
            nameOfUser.stel.transition ="0.57s";
        //   document.getElementById('hidden-message').style.display = "block";
        //   document.getElementById('enterValue').style.borderColor = "red";
        //   document.getElementById('enterValue1').style.borderColor = "red";
        //   document.getElementById('enterValue').style.transition = "0.57s";
        }
        else{
            alert('good to go!');
        }
        
}
    document.querySelector('#formSubmitBtn1').addEventListener('click' , signUpSubmit)
    function signUpSubmit(){
        let newEmailValue = document.getElementById('enter-Value-hidden').value;
        let newEmailValue1 = document.getElementById('enter-Value-hidden1').value;
        if((newEmailValue && newEmailValue1) == 0){
            document.getElementById('hidden-hidden-message').style.display = "block";
          }
          else {
              if((newEmailValue || newEmailValue1) == 0){
                  document.getElementById('hidden-hidden-message').style.display = 'block';
              }
              else{
                document.getElementById('hidden-hidden-message').style.display = 'none';
                  alert('good to go!');
              }
          }
    }
    document.querySelector('#floating').addEventListener('click',OTPgenerator)
    function OTPgenerator(){
        document.getElementById('generateOTP').style.display = "block";
        document.querySelector('.outerSection').style.display = "none";

    }
    document.querySelector('#OTPgeneratebtn').addEventListener('click',OTPgenerator);
    function OTPgenerator(){
        document.getElementById('generateOTP').style.display = "block";

        let OTPnumber = Math.floor((Math.random()) * 700000);
        alert('your one time password is:' + OTPnumber);
    }