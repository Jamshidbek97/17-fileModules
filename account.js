const moment = require('moment');

class Account {
    #amount;
    #account_id;

    constructor (name, amount, account_id){
        this.name = name;
        this.#amount = amount;
        this.#account_id = account_id;
        
    }

    tellBallance(){
        console.log("Your total balance: ", this.#amount);       
        return this.#amount;
    }
    withdrawMoney(amount){
        if (this.#amount > amount){
            this.#amount -= amount
            console.log(`You have withdrawed ${amount}$ of money and now you have ${this.#amount}$`);
            
        } else {console.log(`You do not have enough money in your account: ${this.#amount}$`);
        }
    }

    makeDeposit(amount){
        this.#amount += amount
        console.log(`You have successfully deposited money and you have ${this.#amount}$`);
        
    }
    giveDetails(){
        console.log(`Hello dear ${this.name} your account id is ${this.#account_id} and your balance has ${this.#amount}$`);        
    }

    static aboutClass(){
        console.log(`Bu class accountlarni yasash uchun xizmat qiladi`);
    }

    static tellTime(){
        console.log(moment().format('HH:mm:ss'));
        
    }
}

module.exports = Account;