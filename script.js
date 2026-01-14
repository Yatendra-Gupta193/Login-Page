// Forms
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

// Switch Links
const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");

// Messages
const loginMessage = document.getElementById("loginMessage");
const signupMessage = document.getElementById("signupMessage");

// Switch to Sign Up
showSignup.addEventListener("click", () => {
    loginForm.classList.remove("active-form");
    signupForm.classList.add("active-form");
});

// Switch to Login
showLogin.addEventListener("click", () => {
    signupForm.classList.remove("active-form");
    loginForm.classList.add("active-form");
});

// Show / Hide Password
function togglePassword(inputId, toggleId) {
    const input = document.getElementById(inputId);
    const toggle = document.getElementById(toggleId);

    toggle.addEventListener("click", () => {
        const type = input.getAttribute("type") === "password" ? "text" : "password";
        input.setAttribute("type", type);

        toggle.innerHTML = type === "password"
            ? '<i class="fa fa-eye"></i>'
            : '<i class="fa fa-eye-slash"></i>';
    });
}

togglePassword("loginPassword", "toggleLoginPassword");
togglePassword("signupPassword", "toggleSignupPassword");

// 🔐 Strong Password Rule
function isStrongPassword(password) {
    const minLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return minLength && hasUpper && hasLower && hasNumber && hasSpecial;
}

// LOGIN
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (username === "" || password === "") {
        loginMessage.style.color = "red";
        loginMessage.textContent = "Please fill all fields.";
    }
    else if (!isStrongPassword(password)) {
        loginMessage.style.color = "red";
        loginMessage.textContent =
            "Password must be 8+ chars with uppercase, lowercase, number & special symbol.";
    }
    else {
        if (username === "admin" && password === "Admin@123") {
            loginMessage.style.color = "green";
            loginMessage.textContent = "Login Successful!";
        } else {
            loginMessage.style.color = "red";
            loginMessage.textContent = "Invalid username or password.";
        }
    }
});

// SIGN UP
signupForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("signupUsername").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();

    if (username === "" || email === "" || password === "") {
        signupMessage.style.color = "red";
        signupMessage.textContent = "Please fill all fields.";
    }
    else if (!isStrongPassword(password)) {
        signupMessage.style.color = "red";
        signupMessage.textContent =
            "Password must be 8+ chars with uppercase, lowercase, number & special symbol.";
    }
    else {
        // 🔔 Browser Popup
        alert("Account created successfully!");

        // Optional: Clear form
        signupForm.reset();

        // Optional: Automatically go to Login form
        signupForm.classList.remove("active-form");
        loginForm.classList.add("active-form");
    }
});
