document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector(".total"); 
    const numbersBtn = document.querySelectorAll(".number"); 
    const history = document.querySelector(".equation");
    const addition = document.querySelector("#add"); 
    const subtraction =  document.querySelector("#subtract"); 
    const multiplication = document.querySelector("#multiply"); 
    const division = document.querySelector("#divide"); 
    const equals = document.querySelector("#equal"); 
    const clear = document.querySelector(".clear"); 
    const deleteBtn = document.querySelector(".delete"); 
    const decimal = document.querySelector("#decimal"); 
   

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


    function operate(num1, operator, num2){
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

    function handleNumberClick(event) {
        const clickedNumber = event.target.textContent;
        displayValue += clickedNumber;
        console.log(displayValue);
        display.textContent = displayValue;
        historyValue += clickedNumber; 
        history.textContent = historyValue; 
    }
    

   function setDisplay(input){
        history.textContent = input; 
        historyValue = input; 
        display.textContent = input; 
        displayValue = input; 
   }
    
    
    let equationString = "";  

    numbersBtn.forEach(function(number){
        number.addEventListener("click", handleNumberClick); 
        number.addEventListener("click", () => {
             equationString += number.textContent; 

        }); 
    });


    
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

    equals.addEventListener("click", handleNumberClick); 
    equals.addEventListener("click", () => {
        equationString = equationString.replace(/\s+/g, '');
        equationString = equationString.replaceAll(/(\d+(?:\.\d+)?)(?!\.)|(?<!\.)\b(\D+)\b(?!$)/g, "$1$2 ");
        let equationList = equationString.split(" "); 
        equationList = equationList.filter((str) => str !== '');
        let answer = operate(+equationList[0], equationList[1], +equationList[2]);
    
        
        setDisplay(answer); 

        equationString = answer; 
       
    }); 

    clear.addEventListener("click", () => {
        setDisplay(""); 
        equationString = "";
        
    })

    deleteBtn.addEventListener("click", () => {
        equationString = equationString.replace(/\s+/g, '');
        if (equationString.length === 1){
            equationString = "";
        }
        else{
            equationString = equationString.substring(0,equationString.length-1);
        }
       
        setDisplay(equationString); 

        equationString = equationString.replaceAll(/(\d+(?:\.\d+)?)(?!\.)|(?<!\.)\b(\D+)\b(?!$)/g, "$1$2 ");

    })


    decimal.addEventListener("click", () => {
        equationString = equationString.replace(/\s+/g, '');
        if (equationString.includes(".")){
            equationString = equationString; 
        }
        else{
            equationString = equationString + ".";
        }
        setDisplay(equationString); 
    })             

    

    console.log(equationString); 
});