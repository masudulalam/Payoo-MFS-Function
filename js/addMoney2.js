document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = getInputFieldValueById ('input-add-money');
    const pinNumber = getInputFieldValueById ('input-pin-number');

    //  Validation addMoney
    if(isNaN(addMoney)) {
        alert('Invalid Number! Please Enter The Right Number.');
        return;
    }

    if (pinNumber === 1234) {
        const balance = getTextFieldValueById ('account-balance');
        const newBalance = balance + addMoney;
        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction history
        const para = document.createElement('p');
        para.innerText = `Added: ${addMoney} TK. New Balance: ${newBalance} TK.`;
        document.getElementById('transaction-container').appendChild(para);

    } else {
        alert ('Invalid Pin Number! Please Try Again.')
    }
})