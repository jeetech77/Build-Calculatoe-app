const firstValueInput = document.querySelector(".container input:nth-child(1)");
const secondValueInput = document.querySelector(".container input:nth-child(2)");
const addButton = document.querySelector('.button-sec button:nth-child(1)');
const subsButton = document.querySelector('.button-sec button:nth-child(2)');
const multButton = document.querySelector('.button-sec button:nth-child(3)');
const deviButton = document.querySelector('.button-sec button:nth-child(4)');
const operationBtn = document.querySelectorAll(".operation-btn");
const outputText = document.querySelector(".output-text")

let result = 0;
operationBtn.forEach(element => {
    element.addEventListener('click', () => {
        let firstValue = parseInt(firstValueInput.value);
        let secondValue = parseInt(secondValueInput.value);
        if (isNaN(firstValue)|| isNaN(secondValue)) {
            outputText.innerHTML=`Enter a number in order to perfrom the operations.`
            return
        }
        let operationPerform = element.innerHTML;
        if (operationPerform === " + ") {
            result = firstValue + secondValue;
            outputText.innerHTML=`Your result is ${result}`;
        }
        else if(operationPerform === " - ")
        {
            result = firstValue - secondValue;
            outputText.innerHTML=`Your result is ${result}`;
        }
        else if (operationPerform === " × ") 
        {
            result = firstValue * secondValue;
            outputText.innerHTML=`Your result is ${result}`;
        }
        else if (operationPerform === " ÷ ") 
        {
            result = firstValue / secondValue;
            outputText.innerHTML=`Your result is ${result}`;
        }
    })
});