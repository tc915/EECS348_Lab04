document.getElementById("passwordForm").addEventListener("submit", function (event) {

    event.preventDefault();

    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const message = document.getElementById("message");

    if (password1.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    if (password1 !== password2) {
        message.textContent = "Passwords do not match";
        message.style.color = "red";
        alert("Passwords do not match.");
        return;
    }

    message.textContent = "Passwords matched!";
    message.style.color = "green";
});