#!/usr/bin/env node

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

const guessingNumber = Math.round(Math.random() * 100);

console.log('Загадано число в диапазоне от 0 до 100')
rl.on('line', (answer) => {
    if (+answer < guessingNumber) {
        console.log('Загаданное число больше введенного');
    } else if (+answer > guessingNumber) {
        console.log('Загаданное число меньше введенного');
    } else if (+answer === guessingNumber) {
        console.log('Вы угадали!');
        rl.close();
    } else {
        console.log('Вероятно введено некорректное значение, попробуйте еще раз.');
    }
})
