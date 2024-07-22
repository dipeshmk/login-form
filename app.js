document.getElementById('show-register').addEventListener('click', function() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('register-container').style.display = 'flex';
});

document.getElementById('show-login').addEventListener('click', function() {
    document.getElementById('login-container').style.display = 'flex';
    document.getElementById('register-container').style.display = 'none';
});
