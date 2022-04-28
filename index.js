class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {}

  appendNumber(number) {
    this.currentOperand = number;
  }

  chooseOperation(operation) {}

  compute() {}

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
  }
}

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");

  const numberButtons = document.getElementsByClassName("data-number");
  const operationButtons = document.getElementsByName("data-operation");
  const equalsButton = document.getElementById("data-equals");
  const deleteButton = document.getElementById("data-delete");
  const allClearButton = document.getElementById("data-all-clear");
  const previousOperandTextElement = document.getElementById(
    "data-previous-operand"
  );
  const currentOperandTextElement = document.getElementById(
    "data-current-operand"
  );

  const calculator = new Calculator(
    previousOperandTextElement,
    currentOperandTextElement
  );
  for (i = 0; i <= numberButtons.length; i++) {
    console.log(numberButtons[i]);
    numberButtons[i].addEventListener("click", () => {
      calculator.appendNumber(numberButtons[i].innerText);
      calculator.updateDisplay();
    });
  }
  //   numberButtons.forEach((button) => {
  //     console.log(button);

  //     button.addEventListener("click", () => {
  //       calculator.appendNumber(button.innerText);
  //       calculator.updateDisplay();
  //     });
  //   });
});
