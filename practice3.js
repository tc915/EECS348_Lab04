document.getElementById("passwordForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the values of the two password fields
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const message = document.getElementById("message");

    // Check if passwords are at least 8 characters long
    if (password1.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    // Check if passwords match
    if (password1 !== password2) {
        alert("Passwords do not match.");
        return;
    }

    // If everything is fine, display a success message
    message.textContent = "Passwords matched!";
    message.style.color = "green";
});