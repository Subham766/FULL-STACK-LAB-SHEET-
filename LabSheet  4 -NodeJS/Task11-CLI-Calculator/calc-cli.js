const args = process.argv.slice(2);

const num1 = Number(args[0]);
const num2 = Number(args[1]);
const operator = args[2];

if (args.length < 3 || Number.isNaN(num1) || Number.isNaN(num2)) {
  console.log("Usage: node calc-cli.js 10 5 +");
  process.exit(1);
}

let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    if (num2 === 0) {
      console.log("Error: Cannot divide by zero.");
      process.exit(1);
    }
    result = num1 / num2;
    break;
  default:
    console.log("Invalid operator. Use +, -, * or /");
    process.exit(1);
}

console.log(`${num1} ${operator} ${num2} = ${result}`);
