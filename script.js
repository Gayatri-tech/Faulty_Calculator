console.log("Faulty Calculator");
let userInput = prompt("Enter an operator for required operation(-, +, *, /):");
let randomNum = Math.random();
let result = document.getElementById("result");
let cal;
// console.log(randomNum);
if (
  userInput == "-" ||
  userInput == "+" ||
  userInput == "*" ||
  userInput == "/"
) {
  let num1 = prompt("Enter first number:");
  num1 = parseInt(num1);
  let num2 = prompt("Enter second number:");
  num2 = parseInt(num2);
  if (randomNum < 0.1) {
    if (userInput == "+") {
      cal = num1 - num2;
      // console.log(`${num1} + ${num2} = ${cal}`);
      result.innerHTML = num1 + " + " + num2 + " = " + cal;
    }
    if (userInput == "-") {
      cal = num1 / num2;
      // console.log(`${num1} - ${num2} = ${cal}`);
      result.innerHTML = num1 + " - " + num2 + " = " + cal;
    }
    if (userInput == "*") {
      cal = num1 + num2;
      // console.log(`${num1} * ${num2} = ${cal}`);
      result.innerHTML = num1 + " * " + num2 + " = " + cal;
    }
    if (userInput == "/") {
      cal = num1 * num2;
      // console.log(`${num1} / ${num2} = ${cal}`);
      result.innerHTML = num1 + " / " + num2 + " = " + cal;
    }
  } else {
    if (userInput == "+") {
      let cal = num1 + num2;
      // console.log(`${num1} + ${num2} = ${cal}`);
      result.innerHTML = num1 + " + " + num2 + " = " + cal;
    }
    if (userInput == "-") {
      cal = num1 - num2;
      // console.log(`${num1} - ${num2} = ${cal}`);
      result.innerHTML = num1 + " - " + num2 + " = " + cal;
    }
    if (userInput == "*") {
      cal = num1 * num2;
      // console.log(`${num1} * ${num2} = ${cal}`);
      result.innerHTML = num1 + " * " + num2 + " = " + cal;
    }
    if (userInput == "/") {
      cal = num1 / num2;
      // console.log(`${num1} / ${num2} = ${cal}`);
      result.innerHTML = num1 + " / " + num2 + " = " + cal;
    }
  }
} else {
  alert("Invalid operator");
}
