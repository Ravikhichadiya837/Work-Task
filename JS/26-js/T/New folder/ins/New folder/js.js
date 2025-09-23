document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "" || password === "") {
    alert("Please fill in both fields!");
  } else {
    // Fake login (demo only)
    alert(`Logging in as: ${username}`);
    
    // In real use: send data to backend
    // fetch("/login", { method: "POST", body: JSON.stringify({ username, password }) })
  }
});







 document.addEventListener('DOMContentLoaded', function() {
            const loginForm = document.getElementById('login-form');
            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');
            const loginButton = document.getElementById('login-button');
            const errorMessage = document.getElementById('error-message');
            const forgotPw = document.getElementById('forgot-pw');
            
            // Enable login button only when both fields have values
            function checkInputs() {
                if (usernameInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
                    loginButton.removeAttribute('disabled');
                } else {
                    loginButton.setAttribute('disabled', 'disabled');
                }
            }
            
            usernameInput.addEventListener('input', checkInputs);
            passwordInput.addEventListener('input', checkInputs);
            
            // Form submission
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Simple validation - in a real app, this would communicate with a server
                if (passwordInput.value.length < 6) {
                    errorMessage.style.display = 'block';
                    passwordInput.style.borderColor = '#ed4956';
                } else {
                    errorMessage.style.display = 'none';
                    passwordInput.style.borderColor = '#dbdbdb';
                    alert('Login functionality would connect to server in a real application.');
                    // Here you would typically send the data to a server for authentication
                }
            });
            
            // Forgot password functionality
            forgotPw.addEventListener('click', function() {
                const email = prompt('Please enter your email address:');
                if (email) {
                    alert(`Password reset instructions would be sent to ${email} in a real application.`);
                }
            });
            
            // Facebook login simulation
            document.querySelector('.fb-login').addEventListener('click', function() {
                alert('This would redirect to Facebook login in a real application.');
            });
        });