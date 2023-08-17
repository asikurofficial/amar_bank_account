// 1--> add even listener to btn.
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // console.log('windrawwwww !!!!');

    // 2--> get deposit amount from input field.
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = withdrawField.value;
    //  console.log(newWithdrawElement);

    // 3--> convert string to number.
    const newWithdrawNumber = parseFloat(newWithdrawString);
    // console.log(newWithdrawNumber);

    // 4--> clear input field.
    withdrawField.value = '';

    // 5--> get previous withdraw & convert to number
    const previousWithdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = previousWithdrawTotal.innerText;
    const previousWithdrawTotalNumber = parseFloat(previousWithdrawTotalString)
    // console.log(previousWithdrawTotalNumber);

    // 6--> new withdraw total

    const newWithdrawTotal = previousWithdrawTotalNumber + newWithdrawNumber;
    previousWithdrawTotal.innerText = newWithdrawTotal;
    // console.log(newWithdrawTotal);

    // 7--> balance total 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousTotalBalanceString = balanceTotalElement.innerText;
    const previousTotalBalanceNumber = parseFloat(previousTotalBalanceString);

    const newTotalBalanceAfterWithdraw = previousTotalBalanceNumber - newWithdrawNumber;
    balanceTotalElement.innerText = newTotalBalanceAfterWithdraw;

})

