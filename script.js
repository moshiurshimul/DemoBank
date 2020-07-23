// Hiding the login section 

let loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', function() {
    // hiding login area
    document.getElementById('login-details').style.display = 'none';
    // displaying user transaction area
    document.getElementById('transaction-area').style.display = 'block';
})