// Activity 1 - Take this code and turn it into an arrow function - code below

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(33));

const arrowFactorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * arrowFactorial(n - 1);
    }
};

console.log(arrowFactorial(33));

// Activity 2 - Edit the below snippet to include two parameters and a running order count updated when the function is called:

let orderCount = 0;

const takeOrder = (topping1, topping2) => {
    console.log(`Pizza with ${topping1} and ${topping2}`);
    orderCount++;
};

takeOrder("pineapple", "ham"); // Passes in the arguments "pineapple" and "ham".

// Activity 3 - Cash machine time, dispenses cash if pin number is correct and balance is equal to or more than the ammount trying to withdraw.

let pin = 1234;
let balance = 1000;

const cashMachine = (pinNumber, cash) => {
    if (pinNumber === pin && cash <= balance) {
        console.log(`Dispensing £${cash}`);
    } else if (pinNumber !== pin) {
        console.log("Incorrect pin number");
    } else {
        console.log("Insufficient funds");
    }
};

cashMachine(1234, 500); // Passes in the arguments 1234 and 500.
