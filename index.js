const signupDiv = document.getElementById('signup');
const loginDiv = document.getElementById('login');
const signupLink = document.getElementById('signup-link');
const loginLink = document.getElementById('login-link');


signupLink.addEventListener('click', () => {
   loginDiv.hidden = true;
   signupDiv.hidden = false;
})

loginLink.addEventListener('click', () => {
   loginDiv.hidden = false;
   signupDiv.hidden = true;
})


function validateSignupForm() {
   //collect form data in JavaScript variables  
   let pw1 = document.getElementById("pswd1").value;
   let pw2 = document.getElementById("pswd2").value;
   let email = document.getElementById("email").value;

   if ((pw1.length >= 8) && (pw1.length <= 15)) {
      document.getElementById("message1").hidden = true;
   }

   //minimum password length validation  
   if (pw1.length < 8) {
      document.getElementById("message1").innerHTML = "**Password length must be atleast 8 characters";
      return false;
   }

   //maximum length of password validation  
   if (pw1.length > 15) {
      document.getElementById("message1").innerHTML = "**Password length must not exceed 15 characters";
      return false;
   }

   if (pw1 != pw2) {
      document.getElementById("message2").innerHTML = "**Passwords are not same";
      return false;
   } else {
      document.getElementById("message2").hidden = true;
      alert("Your account created successfully");
      document.write("JavaScript form has been submitted successfully");
   }
}

