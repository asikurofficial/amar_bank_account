
// 1--> add even listener to btn.
document.getElementById('btn-deposit').addEventListener('click', function () {
    // console.log('deposit clicked');

    // 2--> get deposit amount from input field.
    const depositField = document.getElementById('deposit-field')
    const newDepositAmountString = depositField.value;
    // console.log(newDepositAmountString);

    // 3--> convert string to number.
    const newDepositAmountNumber = parseFloat(newDepositAmountString);

    // 4--> clear input field.
    // console.log(newDepositAmountNumber);
    depositField.value = '';

    // 5--> get previous deposit & convert to number
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotalNumber = parseFloat(previousDepositTotalString);

    // 6--> new deposit total
    const newDepositTotal = previousDepositTotalNumber
        + newDepositAmountNumber;
    depositTotalElement.innerText = newDepositTotal;

    // 7--> balance total 

    const balanceTotalElement = document.getElementById('balance-total');
    const previousTotalBalanceString = balanceTotalElement.innerText;
    const previousTotalBalanceNumber = parseFloat(previousTotalBalanceString);

    const newTotalBalance = previousTotalBalanceNumber + newDepositAmountNumber;

    balanceTotalElement.innerText = newTotalBalance;

})