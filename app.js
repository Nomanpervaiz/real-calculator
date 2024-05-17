let display = document.getElementById("display");
let screenCopy = document.querySelector(".screenCopy");
let equalSign = document.getElementById("equalTo");
let historyList = document.getElementById("list");

// clear display function
function clearValue() {
  display.value = "";
  screenCopy.value = "";
}

// Delete value one by one
function deleteValue() {
  display.value = display.value.slice(0, -1);
}

// number function 0 to 9
let lastInputWasOperator = false;
function valueGet(value) {
  if (lastInputWasOperator && ["+", "-", "*", "/", "%"].includes(value)) {
    return;
  }

  if (!["+", "-", "*", "/", "%"].includes(value)) {
    lastInputWasOperator = false;
  }
  display.value += value;
  screenCopy.value += value;
  if (["+", "-", "*", "/", "%"].includes(value)) {
    lastInputWasOperator = true;
  }
}

// expressions
function results() {
  let expression = display.value;
  let str = expression;
  let result = "";
  historyList.innerHTML += "<li>" + "Expression : " + str + "</li>";
  if (str) {
    let operator = "";
    let num1 = "";
    let num2 = "";
    for (let i = 0; i < str.length; i++) {
      if (str.indexOf("+") !== -1) {
        operator = str.indexOf("+");
      } else if (str.indexOf("*") !== -1) {
        operator = str.indexOf("*");
      } else if (str.indexOf("/") !== -1) {
        operator = str.indexOf("/");
      } else if (str.indexOf("-") !== -1) {
        operator = str.indexOf("-");
      } else {
        console.log("invalid operator");
      }

      if (str.slice(0, operator.length)) {
        num1 = str.slice(0, operator);
      } else {
        num1 = "";
      }
      if (str.slice(operator + 1, i + 1)) {
        num2 = str.slice(operator + 1, i + 1);
      } else {
        num2 = "";
      }
    }

    operator = str[operator];
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operator) {
      case "+":
        result = num1 + num2;
        historyList.innerHTML += "<li>" + "Result : " + result + "</li> <br>";
        break;
      case "-":
        result = num1 - num2;
        historyList.innerHTML += "<li>" + "Result : " + result + "</li> <br>";
        break;
      case "*":
        result = num1 * num2;
        historyList.innerHTML += "<li>" + "Result : " + result + "</li> <br>";
        break;
      case "/":
        if (num2 !== 0) {
          result = num1 / num2;
          historyList.innerHTML += "<li>" + "Result : " + result + "</li> <br>";
        } else {
          result = "Not divisible!";
        }
        break;
      case "%":
        result = num1 % num2;
        historyList.innerHTML += "<li>" + "Result : " + result + "</li> <br>";
        break;

      default:
        result = "Invalid operator!";
        break;
    }
    display.value = result;
  } else {
    result = "Syntax Error!";
  }
}
