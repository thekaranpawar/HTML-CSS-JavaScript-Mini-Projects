
let displayField = document.querySelector("input");
let currentInput = '';
let operator = null;
let previousInput = '';

function appendNumber(number) {
  currentInput += number.toString();
  displayField.value = currentInput;
}

function setOperator(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculateResult();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = null;
  displayField.value = '';
}

function calculateResult() {
  if (currentInput === '' || previousInput === '') return;

  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        result = 'Error';
      } else {
        result = prev / current;
      }
      break;
    default:
      return;
  }

  displayField.value = result;
  currentInput = result.toString();
  previousInput = '';
  operator = null;
}
