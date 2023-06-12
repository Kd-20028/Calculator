document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector(".total"); 
    const numbersBtn = document.querySelectorAll(".number"); 
    const history = document.querySelector(".equation");
    const addition = document.querySelector("#add"); 
    const subtraction =  document.querySelector("#subtract"); 
    const multiplication = document.querySelector("#multiply"); 
    const division = document.querySelector("#divide"); 

    let displayValue = " "; 
    let historyValue = " "; 

    function add(a, b){
        return a + b; 
    }

    function subtract(a, b){
        return a - b; 
    }

    function multiply(a, b){
        return a * b;
    }

    function divide(a, b){
        if (b == 0){
            return "ERROR"
        }
        return a / b; 
    }

    let num1;
    let num2;
    let operator; 

    function operate(num1, operator, num2){
        switch (operator) {
            case "+":
            return add(num1, num2);
            case "-":
            return subtract(num1, num2);
            case "*":
            return multiply(num1, num2);
            case "/":
            return divide(num1, num2);
            default:
            return "Error: Invalid operator!";
        }
    }

    function handleNumberClick(event) {
        const clickedNumber = event.target.textContent;
        displayValue += clickedNumber;
        console.log(displayValue);
        display.textContent = displayValue;
        historyValue += clickedNumber; 
        history.textContent = historyValue; 
    }

    let equationList = []; 

    numbersBtn.forEach(function(number){
        number.addEventListener("click", handleNumberClick); 
        equationList.push(number); 
    });

   
});