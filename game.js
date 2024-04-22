#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let guessAnswer = Math.floor(Math.random() * 10 + 1);
let guessnumber = await inquirer.prompt([
    {
        type: "number",
        name: "yourguess",
        message: "Enter your guess number between 1 & 10: ",
    },
]);
if (guessnumber.yourguess === guessAnswer) {
    console.log(chalk.bgGreen("Congratulation!!!****** You guess the right number******"));
}
else if (guessnumber.yourguess > 10) {
    console.log(chalk.yellowBright("Kindly enter number between 1 to 10"));
}
else {
    console.log(chalk.redBright("Sorry!!! You guess the wrong number"));
}
