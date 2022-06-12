const passwordField = document.getElementById('password');
const passRequiredMsg = document.getElementById('password_required_msg');
const passStrength = document.getElementById('password_strength');

passwordField.addEventListener('input',()=>{
   if(passwordField.value.length > 0){
    passRequiredMsg.style.display="block"
   }else{
    passwordRequiredMsg.style.display="none"
   }

   if(passwordField.value.length < 4){
      passStrength.innerHTML="weak";
      passwordField.style.borderColor = "red";
      passRequiredMsg.style.color = "red";
      passStrength.style.color = "red";

   }
   else if(passwordField.value.length <= 4 && passwordField.value.length < 8){
      passStrength.innerHTML="medium";
      passwordField.style.borderColor = "yellow";
      passRequiredMsg.style.color = "yellow";
      passStrength.style.color = "yellow";
   }
   else if(passwordField.value.length >= 8){
      passStrength.innerHTML="strong";
      passwordField.style.borderColor = "green";
      passRequiredMsg.style.color = "green";
      passStrength.style.color = "green";
   }
})
