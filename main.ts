#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 12000; //Dollar
let myPin = 6323;

console.log(chalk.yellowBright("Welcome to Kanwal's ATM machine...."));
console.log(chalk.greenBright("Please enter your card to begin: "));

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: chalk.magenta("Enter your 4-digit pin code"),
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log(
    chalk.blueBright("Your pin code is correct!!! Login successfully....")
  );
  console.log(chalk.yellow(`Your Current account balance is ${myBalance}`));

let operationAns = await inquirer.prompt([
  {
    name: "operation",
    message: chalk.red("Please select the Transaction"),
    type: "list",
    choices: ["withdraw", "check balance", "fastcash"],
  },
]);

if (operationAns.operation === "withdraw") {
  let amountAns = await inquirer.prompt([
    {
      name: "amount",
      message: chalk.magenta("Enter your amount to withdraw"),
      type: "number",
    },
  ]);


  if (amountAns.amount > myBalance) {
    console.log(chalk.redBright("Insufficient Balance"));
  } else {
    console.log(chalk.magenta(`${amountAns.amount} Withdraw Successfully`));

   (myBalance -= amountAns.amount);
    console.log(chalk.green(`your remaining account balance is ${myBalance}`));
  }
} else if (operationAns.operation === "check balance") {
  console.log(
    chalk.bgCyanBright(`your remaining account balance is ${myBalance}`)
  );
} else if (operationAns.operation === "fastcash") {
  let cash = await inquirer.prompt([
    {
      name: "fastcash",
      message: chalk.greenBright("select your amount"),
      type: "list",
      choices: ["1000", "2000", "5000", "10000"],
    },
  ]);
  console.log(chalk.blue(`Transaction Successfull!!!`));
  if (myBalance -= cash.fastcash)
  console.log(
    chalk.cyanBright(`Your remaining Account Balance is ${myBalance}`)
  );
} 

}
else{

  console.log(chalk.red(`Invalid Pin code... Please enter your correct 4-Digit pin code!!`));


  }