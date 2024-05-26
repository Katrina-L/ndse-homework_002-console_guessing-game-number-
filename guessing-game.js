#!/usr/bin/env node

const readline = require('readline');
const rl = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout
});

let min, max; 
rl.question('Задайте минимум интервала: ', (value) => {
    min = parseInt(value);
    rl.question('Задайте максимум интервала: ', (value) => {
        max = parseInt(value);

        const guessingNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(`Загадано число в диапазоне от ${min} до ${max}`);

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
    })
})

//-------------------------  НЕ РАБОТАЕТ  ----------------------------------------------------------------------

// const readline = require('readline');
// const readlineSync = require('readline-sync');
// const rl = readline.createInterface({ 
//     input: process.stdin,
//     output: process.stdout
// });

// let min = +readlineSync.question('Задайте минимум интервала: ');
// let max = +readlineSync.question('Задайте максимум интервала: ');

// const guessingNumber = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(`Загадано число в диапозоне от ${min} до ${max}`);

// rl.on('line', (answer) => {
//     if (+answer < guessingNumber) {
//         console.log('Загаданное число больше введенного');
//     } else if (+answer > guessingNumber) {
//         console.log('Загаданное число меньше введенного');
//     } else if (+answer === guessingNumber) {
//         console.log('Вы угадали!');
//         rl.close();
//     } else {
//         console.log('Вероятно введено некорректное значение, попробуйте еще раз.');
//     }
// });