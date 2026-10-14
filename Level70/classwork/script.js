const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (username.length <= 5) {
        alert("Username must be more than 5 characters.");
        return;
    }

    if (!email.includes("@gmail.com")) {
        alert("Email must contain @gmail.com.");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters.");
        return;
    }

    alert("Registration successful!");
});