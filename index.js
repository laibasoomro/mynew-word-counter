#! /usr/bin/env node
import inquirer from "inquirer";
let answers = await inquirer.prompt([{
        name: "Sentence",
        type: "input",
        message: "Enter your Sentence to count the words",
    }]);
const word = answers.Sentence.trim().split(" ");
console.log(word);
console.log(`Your Sentence word count is ${word.length}`);
