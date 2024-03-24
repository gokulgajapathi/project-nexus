const signupForm = document.getElementById('signup-form');
const signupError = document.getElementById('signup-error');

signupForm.addEventListener('submit', function(event) {
  const password = signupForm.querySelector('input[type="password"]').value;
  const confirmPassword = signupForm.querySelectorAll('input[type="password"]')[1].value;
  
  if (password !== confirmPassword) {
    signupError.textContent = "Passwords do not match";
    event.preventDefault();
  } else {
    signupError.textContent = "";
  }
});
