
let display = document.getElementById("display")
let screenCopy = document.querySelector('.screenCopy')
// clear display function
function clearValue() {
  display.value = "";
  screenCopy.value =  "";

}
// Delete value one by one
function deleteValue() {
  display.value = display.value.slice(0, -1);
}


// number function 0 to 9
function valueGet(value) {
    let screenValue = display.value += value;
  screenCopy.value = screenValue
} 


// expressions
function results() {
    let expression = display.value;
  let match = expression.match((/^(\d+)([+\-x÷%])(\d+)$/))
  if (match) {
      let num1 = parseFloat(match[1]);
      let operator = match[2];
      let num2 = parseFloat(match[3]);
      let result;
      switch (operator) {
          case '+':
              result = num1 + num2;
              console.log(result);
              break;
          case '-':
              result = num1 - num2;
              console.log(result);
              break;
          case 'x':
              result = num1 * num2;
              console.log(result);
              break;
          case '%':
              result = num1 % num2;
              console.log(result);
              break;
          case '÷':
              if (num2 !== 0) {
                  result = num1 / num2;
                  console.log(result);
              } else {
                  result = "syntx error";
              }
              break;
          default:
              result = "syntx error";
      }
      display.value = result;
  } else {
      display.value = "Error: Invalid ";
  }
}
