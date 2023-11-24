function login() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    // Perform basic client-side validation
    if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return;
    }

    // In a real-world scenario, send the data to the server for authentication
    // Simulate a successful login for demonstration purposes
    alert("Login successful. Redirecting to the dashboard...");
    window.location.href = "index.html";
}

function register() {
    var username = document.getElementById("registerUsername").value;
    var password = document.getElementById("registerPassword").value;

    // Perform basic client-side validation
    if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return;
    }

    // In a real-world scenario, send the data to the server for registration
    // Simulate a successful registration for demonstration purposes
    alert("Registration successful. Redirecting to the dashboard...");
    window.location.href = "index.html";
}