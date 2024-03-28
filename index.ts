import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter your first number", type: "number", name: "firstNumber" },
  { message: "enter your second number", type: "number", name: "seconNumber" },
  {
    message: "select one of the operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["addtion", "sutraction", "multiplication", "division"],
  },
]);

if (answer.operator === "addtion") {
  console.log(answer.firstNumber + answer.seconNumber);
} else if (answer.operator === "sutraction") {
  console.log(answer.firstNumber - answer.seconNumber);
} else if (answer.operator === "multiplication") {
  console.log(answer.firstNumber * answer.seconNumber);
} else if (answer.operator === "division") {
  console.log(answer.firstNumber / answer.seconNumber);
} else {
  console.log("plese select correct number")
}
