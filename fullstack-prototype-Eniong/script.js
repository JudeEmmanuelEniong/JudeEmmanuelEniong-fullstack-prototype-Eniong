document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const loginBox = document.getElementById('loginBox');
    const msg = document.getElementById('message');
    
    if (document.getElementById('username').value === "admin") {
        loginBox.className = "login-container success-border";
        msg.textContent = "Welcome back!";
        msg.className = "mt-3 text-center text-success";
    } else {
        loginBox.className = "login-container error-border";
        msg.textContent = "Invalid login.";
        msg.className = "mt-3 text-center text-danger";
    }
});