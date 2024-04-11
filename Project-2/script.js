document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registrationForm").addEventListener("submit", function(event) {
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (!validateUsername(username)) {
            showError("Username must be at least 3 characters long and contain only letters, numbers, or underscores.");
            event.preventDefault();
            return;
        }

        if (!validateEmail(email)) {
            showError("Invalid email address.");
            event.preventDefault();
            return;
        }

        if (!validatePassword(password)) {
            showError("Password must be at least 6 characters long.");
            event.preventDefault();
            return;
        }

        if (password !== confirmPassword) {
            showError("Passwords do not match.");
            event.preventDefault();
            return;
        }
    });

    document.getElementById("loginForm").addEventListener("submit", function(event) {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (!validateUsername(username)) {
            showError("Invalid username.");
            event.preventDefault();
            return;
        }

        if (!validatePassword(password)) {
            showError("Invalid password.");
            event.preventDefault();
            return;
        }
    });

    function validateUsername(username) {
        return /^[a-zA-Z0-9_]{3,}$/.test(username);
    }

    // Helper function to validate email address
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Helper function to validate password
    function validatePassword(password) {
        return password.length >= 6;
    }

    // Helper function to display error message
    function showError(message) {
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.textContent = message;
        errorMessage.style.display = "block";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (!validateUsername(username)) {
            showError("Invalid username.");
            event.preventDefault();
            return;
        }

        if (!validatePassword(password)) {
            showError("Invalid password.");
            event.preventDefault();
            return;
        }
    });

    function validateUsername(username) {
        return /^[a-zA-Z0-9_]{3,}$/.test(username);
    }

    function validatePassword(password) {
        return password.length >= 6;
    }

    function showError(message) {
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.textContent = message;
        errorMessage.style.display = "block";
    }
});
