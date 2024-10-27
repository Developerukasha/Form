document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Clear previous error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validate fields
    let hasError = false;

    if (username === '') {
        document.getElementById('usernameError').textContent = 'Username is required.';
        document.getElementById('usernameError').classList.add('active');
        hasError = true;
    }

    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        document.getElementById('emailError').classList.add('active');
        hasError = true;
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        document.getElementById('emailError').classList.add('active');
        hasError = true;
    }

    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required.';
        document.getElementById('passwordError').classList.add('active');
        hasError = true;
    }

    if (confirmPassword === '') {
        document.getElementById('confirmPasswordError').textContent = 'Confirm password is required.';
        document.getElementById('confirmPasswordError').classList.add('active');
        hasError = true;
    } else if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        document.getElementById('confirmPasswordError').classList.add('active');
        hasError = true;
    }

    if (!hasError) {
        alert('Registration successful!');
        // Here you can add code to submit the form or perform other actions
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
