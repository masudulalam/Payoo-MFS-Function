document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();

    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('cash-out-pin');

    // Validation Cash Out
    if(isNaN(cashOut)) {
        alert('Invalid Number! Please Enter The Right Number.');
        return;
    }
    
    if (pinNumber === 1234) {
        const balance = getTextFieldValueById('account-balance');
        // Another Validation Cash Out
        if(cashOut > balance) {
            alert('The Money is Not Available.');
            return;
        }
        const newBalance = balance - cashOut;

        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
            <h4 class="text-2xl font-bold">Cash Out</h4>
            <p>${cashOut} TK. Withdraw New Balance ${newBalance} TK.</p>
        `
        document.getElementById('transaction-container').appendChild(div);
    } else {
        alert ('Invalid Pin Number! Please Try Again.');
    }
})