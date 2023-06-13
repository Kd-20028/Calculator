document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector(".total"); // Reference to the display element
    const numbersBtn = document.querySelectorAll(".number"); // Reference to number buttons
    const history = document.querySelector(".equation"); // Reference to the history element
    const addition = document.querySelector("#add"); // Reference to the addition button
    const subtraction = document.querySelector("#subtract"); // Reference to the subtraction button
    const multiplication = document.querySelector("#multiply"); // Reference to the multiplication button
    const division = document.querySelector("#divide"); // Reference to the division button
    const equals = document.querySelector("#equal"); // Reference to the equals button
    const clear = document.querySelector(".clear"); // Reference to the clear button
    const deleteBtn = document.querySelector(".delete"); // Reference to the delete button
    const decimal = document.querySelector("#decimal"); // Reference to the decimal button
   
    let displayValue = " "; // Current value displayed on the calculator
    let historyValue = " "; // Current history value displayed on the calculator

    // Arithmetic functions
    function add(a, b) {
        return a + b; 
    }

    function subtract(a, b) {
        return a - b; 
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        if (b == 0) {
            return "ERROR";
        }
        return a / b; 
    }

    // Perform arithmetic operation based on operator and numbers
    function operate(num1, operator, num2) {
        switch (operator) {
            case "+":
                return add(+num1, +num2);
            case "-":
                return subtract(num1, num2);
            case "*":
                return multiply(num1, num2);
            case "/":
                return divide(num1, num2);
            default:
                return "Error";
        }
    }

    // Event handler for number buttons
    function handleNumberClick(event) {
        const clickedNumber = event.target.textContent;
        displayValue += clickedNumber;
        display.textContent = displayValue;
        historyValue += clickedNumber; 
        history.textContent = historyValue; 
    }
    
    // Update the display with a new value
    function setDisplay(input) {
        history.textContent = input; 
        historyValue = input; 
        display.textContent = input; 
        displayValue = input; 
    }
    
    let equationString = "";  // Stores the equation as a string

    // Add event listeners to number buttons
    numbersBtn.forEach(function(number) {
        number.addEventListener("click", handleNumberClick); 
        number.addEventListener("click", () => {
            equationString += number.textContent; 
        }); 
    });

    // Add event listeners to arithmetic operator buttons
    addition.addEventListener("click", handleNumberClick); 
    addition.addEventListener("click", () => {
        equationString += (" " + addition.textContent + " ") ; 
    }); 

    subtraction.addEventListener("click", handleNumberClick); 
    subtraction.addEventListener("click", () => {
        equationString += (" " + subtraction.textContent + " ") ; 
    }); 

    multiplication.addEventListener("click", handleNumberClick); 
    multiplication.addEventListener("click", () => {
        equationString += (" " + multiplication.textContent + " ") ; 
    }); 

    division.addEventListener("click", handleNumberClick); 
    division.addEventListener("click", () => {
        equationString += (" " + division.textContent + " ") ; 
    }); 

    // Event listener for the equals button
    equals.addEventListener("click", handleNumberClick); 
    equals.addEventListener("click", () => {
        equationString = equationString.replace(/\s+/g, ''); // Remove extra spaces
        equationString = equationString.replaceAll(/(\d+(?:\.\d+)?)(?!\.)|(?<!\.)\b(\D+)\b(?!$)/g, "$1$2 "); // Add spaces between numbers and non-numbers
        let equationList = equationString.split(" "); // Split equation string into an array
        equationList = equationList.filter((str) => str !== ''); // Remove empty strings from the array
        let answer = operate(+equationList[0], equationList[1], +equationList[2]); // Perform the calculation
        
        setDisplay(answer); // Update the display with the answer

        equationString = answer; // Store the answer as the new equation string
    }); 

    // Event listener for the clear button
    clear.addEventListener("click", () => {
        setDisplay(""); // Clear the display
        equationString = ""; // Clear the equation string
    });

    // Event listener for the delete button
    deleteBtn.addEventListener("click", () => {
        equationString = equationString.replace(/\s+/g, ''); // Remove extra spaces
        if (equationString.length === 1) {
            equationString = "";
        } else {
            equationString = equationString.substring(0, equationString.length - 1);
        }
       
        setDisplay(equationString); // Update the display with the modified equation string

        equationString = equationString.replaceAll(/(\d+(?:\.\d+)?)(?!\.)|(?<!\.)\b(\D+)\b(?!$)/g, "$1$2 "); // Add spaces between numbers and non-numbers
    });

    // Event listener for the decimal button
    decimal.addEventListener("click", () => {
        equationString = equationString.replace(/\s+/g, ''); // Remove extra spaces

        const lastOperand = equationString.split(/[\+\-\*\/]/).pop(); // Get the last operand
      
        if (!lastOperand.includes(".")) { // Check if the last operand already has a decimal point
          equationString = equationString + ".";
        }
      
        setDisplay(equationString); // Update the display with the modified equation string
    });

    console.log(equationString); 
});
