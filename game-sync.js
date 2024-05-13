#!/usr/bin/env node

const readlineSync = require('readline-sync');

let min = +readlineSync.question('Задайте минимум интервала: ');
let max = +readlineSync.question('Задайте максимум интервала: ');

const guessingNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Загадано число в диапозоне от ${min} до ${max}`);

while (true) {
    let userAnswer = +readlineSync.question('Ваш вариант: ');
    if (userAnswer < guessingNumber) {
        console.log('Загаданное число больше введенного');
    } else if (userAnswer > guessingNumber) {
        console.log('Загаданное число меньше введенного');
    } else if (userAnswer === guessingNumber) {
        console.log('Вы угадали!');
        break;
    } else {
        console.log('Вероятно введено некорректное значение, попробуйте еще раз.');
    }
}
