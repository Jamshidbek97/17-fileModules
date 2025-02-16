//// Module package Core
// //Core package larni install qilish shart emas lekin biz ularni chaqirib olishimiz kerak

// setTimeout(function(){
//     console.log("Ishga tushti");
// }, 5000);

// let number = 0;
// setInterval(() => {
//     console.log("Hisob: ", number);
//     number++;
// }, 1000);

// const fs = require('fs');
// const data = fs.readFileSync('./input.txt', 'utf8');
// console.log(data);
// console.log("---------------------")
// fs.writeFileSync(`./input.txt`, `${data} \n\t\t by Jamshid `);
// const newData = fs.readFileSync("./input.txt", 'utf8');
// console.log(newData);

// //Modeule Package External
// //External modullarni foydalanishdan oldin install qilish kerak bo'ladi 

// const moment = require('moment');
// const time = moment().format();
// console.log(time)

// const inquirer = require('inquirer').default;

// inquirer.prompt([
//     {
//         type: 'input',
//         name: 'raqam',
//         message: 'raqamni kiriting: ',
//     }
// ]).then((answer) => {
//     console.log("Men kiritgan raqam: ", answer.raqam);
// }).catch((err) => console.log(err));
// 12:17 

// const validator = require('validator');
// const test = validator.isEmail('foo@bar.com');
// const test = validator.isInt('10a0.1');
// const test = validator.isIP('140.223.12.32');
// console.log('test:', test);

// const {v4: uuidv4 } = require('uuid');
// const random = uuidv4();
// console.log(random);


// const chalk = require('chalk')
// const log = console.log;
// log(chalk.blue('Hello ') + random + chalk.red(" !"));


// Module package fileS

// const calculate = require('./hisob.js')

// const natija = calculate.ayrish(80, 20);
// console.log("Result: ", natija);

// console.log("Bolish", calculate.bolish(80, 10));

// console.log(require('module').wrapper);

// console.log(arguments);

const Account = require("./account");
Account.aboutClass();
Account.tellTime();

const myAccount = new Account('James', 1000, 21300013);
myAccount.giveDetails()
myAccount.makeDeposit(3000)
myAccount.withdrawMoney(5000)
myAccount.withdrawMoney(2500)