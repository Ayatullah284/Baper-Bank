function ButtonFN(InputID) {
    const InputFild = InputID;
    const InputText = InputFild.value;
    const InputNumber = parseFloat(InputText);
    InputFild.value = '';
    return InputNumber;
}
function valueAddInnerTextFN(innerTextID) {
    const innerTextFild = innerTextID;
    const innerTextString = innerTextFild.innerText;
    const innerTextNumber = parseFloat(innerTextString);
    return innerTextNumber;
}
function BalanceFN(innerTextID2) {
    const innerTextFild2 = innerTextID2;
    const innerTextString2 = innerTextFild2.innerText;
    const innerTextNumber2 = parseFloat(innerTextString2);
    return innerTextNumber2;
}



// Deposite >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
DepositeButton.addEventListener('click', function () {

    // const DepositeInputText = DepositeInput.value;
    // const DepositeInputNumber = parseFloat(DepositeInputText);
    const DepositeInputNumber = ButtonFN(DepositeInput);

    // const DepositeAmountText = DepositeAmount.innerText;
    // const DepositeAmountNumber = parseFloat(DepositeAmountText);
    const DepositeAmountNumber = valueAddInnerTextFN(DepositeAmount);

    const DepositeTotal = DepositeInputNumber + DepositeAmountNumber;

    DepositeAmount.innerText = DepositeTotal;
    // DepositeInput.value = '';




    // Deposite + Balance      >>>>>>>>>>>>>>>>>>>>
    // const BalanceAmountText = BalanceAmount.innerText;
    // const BalanceAmountNumber = parseFloat(BalanceAmountText);
    const BalanceAmountNumber = BalanceFN(BalanceAmount);

    const BalanceAmountUpdate = BalanceAmountNumber + DepositeInputNumber;
    BalanceAmount.innerText = BalanceAmountUpdate;

})







// Balance >>> Withdraw      >>>>>>>>>>>>>>>>>>>>>>>
WithdrawButton.addEventListener('click', function () {

    // const WithdrawInputText = WithdrawInput.value;
    // const WithdrawInputNumber = parseFloat(WithdrawInputText);
    const WithdrawInputNumber = ButtonFN(WithdrawInput);


    // const WithdrawAmountText = WithdrawAmount.innerText;
    // const WithdrawAmountNumber = parseFloat(WithdrawAmountText);
    const WithdrawAmountNumber = valueAddInnerTextFN(WithdrawAmount)

    const WithdrawAmountUpdate = WithdrawAmountNumber + WithdrawInputNumber;

    WithdrawAmount.innerText = WithdrawAmountUpdate;
    // WithdrawInput.value = '';





    // Withdraw - Balance      >>>>>>>>>>>>>>>>>>>>
    // const BalanceAmountText2 = BalanceAmount.innerText;
    // const BalanceAmountNumber2 = parseFloat(BalanceAmountText2);
    const BalanceAmountNumber2 = BalanceFN(BalanceAmount);

    const NewWithdrawTotal = BalanceAmountNumber2 - WithdrawInputNumber;
    BalanceAmount.innerText = NewWithdrawTotal;
})