// Login Button Event Handler

let loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', function() {
    // hiding login area
    document.getElementById('login-details').style.display = 'none';
    // displaying user transaction area
    document.getElementById('transaction-area').style.display = 'block';
});

// Deposit Amount Handle

document.getElementById('depositBtn').addEventListener('click', function() {
    // converting new deposit amount string to number using get input function
    const newDepositAmount = getInputNumber('depositAmount');
    
    // showing update to user on Deposit box
    showingNewAmount('currentDeposit', newDepositAmount);

    //showing update to user on Balance box
    showingNewAmount('totalBalance', newDepositAmount);
    
    // Make ready deposit input box
    document.getElementById('depositAmount').value = '';
    document.getElementById('depositAmount').focus();
});

// Withdraw Amount Handle
document.getElementById('withdrawBtn').addEventListener('click', function() {
    const withdrawAmount = getInputNumber('withdrawAmount');

    // Showing update on withdraw box
    showingNewAmount('currentWithdraw', withdrawAmount);

    // Showing update on Balance box after complete withdrawal
    showingNewAmount('totalBalance', -1*withdrawAmount);

    // Make ready withdraw input box
    document.getElementById('withdrawAmount').value = '';
    document.getElementById('withdrawAmount').focus();
});

// function for getting input value

function getInputNumber(id) {
    const userInput = document.getElementById(id).value;
    
    if(userInput == "") { // if user input empty 
        userInput = 0
    }
    else{
        const inputValue = parseFloat(userInput);
        return inputValue;
    }
}


// function for showing Balance update on box
function showingNewAmount(id, amount) {
        const currentAmount = document.getElementById(id).innerText
        const currentNumber = parseFloat(currentAmount);
        
        //adding new amount
        const currentTotal = currentNumber + amount;
        document.getElementById(id).innerText = currentTotal;
}