// Login Button Event Handler

let loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', function() {
    // hiding login area
    document.getElementById('login-details').style.display = 'none';
    // displaying user transaction area
    document.getElementById('transaction-area').style.display = 'block';
});

// Deposit Amount Handle

document.getElementById('depositBtn').addEventListener('click', ()=> {
    // converting new deposit amount string to number
    const depositAmount = document.getElementById('depositAmount').value; 
    const depositAmountNumber = parseFloat(depositAmount);
    
    // Converting current deposit amount
    const currentDeposit = document.getElementById('currentDeposit').innerText;
    const currentDepositNumber = parseFloat(currentDeposit);

    // adding two deposit value
    const totalDeposit = depositAmountNumber + currentDepositNumber;

    // Showing to user
    document.getElementById('currentDeposit').innerText = totalDeposit;
    
    // Make ready for input
    document.getElementById('depositAmount').value = '';
    document.getElementById('depositAmount').focus();
})