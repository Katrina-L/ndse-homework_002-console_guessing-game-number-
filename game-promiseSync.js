#!/usr/bin/env node

const readline = require('node:readline/promises');
const {stdin, stdout} = require('node:process');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

async function runMe(argv) {
    const {from, to} = argv;
    let {attempts} = argv;
    const rl = readline.createInterface({ input: stdin, output: stdout });
    const result = Math.floor(Math.random()*(to - from + 1) + from); 
    // console.log({result, attempts});
    let answer = undefined;
    let question = '';
    let comment = '';

    do {
        if (attempts === 0) { 
            console.log('Количество попыток не должно быть равно 0');
            comment = 'Попробуйте еще раз';
            break;
        } 
        if (attempts > 0) { 
            question = `Осталось ${attempts} попыток. `;
        } 
            answer = await rl.question(`${question} Введите число от ${from} до ${to}: `); 
            if (answer > result) console.log('Меньше'); 
            else if (answer < result) console.log('Больше'); 
            else if (answer == result) {
                console.log(`Отгадано число ${result}!`);
                break;
            } 
            else console.log('Не число!');
            attempts--; 
        } while (attempts != 0) 
    if (answer != result) {
        console.log(`${comment}`);
    } 
    rl.close(); 
}

const argv = yargs(hideBin(process.argv))
    .option('from', {
        alias: 'f',
        type: 'number',
        description: 'диапазон от',
        default: 1
    })
    .option('to', {
        alias: 't',
        type: 'number',
        description: 'диапазон до',
        default: 100
    })
    .option('attempts', {
        alias: 'a',
        type: 'number',
        description: 'число попыток',
        default: -1
    })
    .argv
    
runMe(argv);