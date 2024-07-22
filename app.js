document.addEventListener('DOMContentLoaded', function() {
    const toggleFormLinks = document.querySelectorAll('#toggleForm');
    const loginForm = document.querySelector('.login-form');
    const registerForm = document.querySelector('.register-form');

    toggleFormLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            loginForm.classList.toggle('active');
            registerForm.classList.toggle('active');
        });
    });
});
