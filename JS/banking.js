function DepositeInputFN(InputID) {
    const InputFild = InputID;
    const InputText = InputFild.value;
    const InputNumber = parseFloat(InputText);
    InputFild.value = '';
    return InputNumber;

}


// Deposite >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
DepositeButton.addEventListener('click', function () {

    // const DepositeInputText = DepositeInput.value;
    // const DepositeInputNumber = parseFloat(DepositeInputText);
    const DepositeInputNumber = DepositeInputFN(DepositeInput);



    const DepositeAmountText = DepositeAmount.innerText;
    const DepositeAmountNumber = parseFloat(DepositeAmountText);

    const DepositeTotal = DepositeInputNumber + DepositeAmountNumber;

    DepositeAmount.innerText = DepositeTotal;
    // DepositeInput.value = '';

    // Deposite + Balance      >>>>>>>>>>>>>>>>>>>>
    const BalanceAmountText = BalanceAmount.innerText;
    const BalanceAmountNumber = parseFloat(BalanceAmountText);

    const BalanceAmountUpdate = BalanceAmountNumber + DepositeInputNumber;
    BalanceAmount.innerText = BalanceAmountUpdate;

})



// Balance >>> Withdraw      >>>>>>>>>>>>>>>>>>>>>>>
WithdrawButton.addEventListener('click', function () {

    // const WithdrawInputText = WithdrawInput.value;
    // const WithdrawInputNumber = parseFloat(WithdrawInputText);
    const WithdrawInputNumber = DepositeInputFN(WithdrawInput);


    const WithdrawAmountText = WithdrawAmount.innerText;
    const WithdrawAmountNumber = parseFloat(WithdrawAmountText);

    const WithdrawAmountUpdate = WithdrawAmountNumber + WithdrawInputNumber;

    WithdrawAmount.innerText = WithdrawAmountUpdate;
    WithdrawInput.value = '';
    // Withdraw - Balance      >>>>>>>>>>>>>>>>>>>>
    const BalanceAmountText2 = BalanceAmount.innerText;
    const BalanceAmountNumber2 = parseFloat(BalanceAmountText2);

    const NewWithdrawTotal = BalanceAmountNumber2 - WithdrawInputNumber;
    BalanceAmount.innerText = NewWithdrawTotal;
})