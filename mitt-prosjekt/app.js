import chalk from "chalk";
import fs from "fs";


const input = fs.readFileSync('./tekst.txt', 'utf-8');
const words = input.split(' ');
const wordCount = words.length;

console.log(chalk.black.bgWhite("Hallo fra Node!"));
console.log(chalk.yellow.bgRed(`Number of words: ${wordCount}`));
