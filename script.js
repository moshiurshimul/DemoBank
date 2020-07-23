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
    const newDeposit = document.getElementById('depositAmount').value; 
    const newDepositAmount = parseFloat(newDeposit);
    
    // showing update to user on Deposit box
    showingNewAmount('currentDeposit', newDepositAmount);

    //showing update to user on Balance box
    showingNewAmount('totalBalance', newDepositAmount);
    
    // Make ready for input
    document.getElementById('depositAmount').value = '';
    document.getElementById('depositAmount').focus();
});

// function for showing Balance update on box
function showingNewAmount(id, newDepositAmount) {
    const currentAmount = document.getElementById(id).innerText
    const currentNumber = parseFloat(currentAmount);
    //adding new amount
    const currentTotal = currentNumber + newDepositAmount;
    document.getElementById(id).innerText = currentTotal;
}