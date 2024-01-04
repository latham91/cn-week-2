// Lesson activity - create a function called favColor. log the color to console.
const favColor = () => {
    console.log("My favourite color is purple.");
};

favColor();

// Lesson activity - change favColor to take a parameter and log the color to console.
const favColor2 = (color) => {
    console.log(`My favourite color is ${color}.`);
};

favColor2("purple");

// Activity 1 - Take this code and turn it into an arrow function - code below

// Regular function
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(33));

// Arrow function
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
        // checks if pin number is correct and if the cash is less than or equal to the balance
        console.log(`Dispensing £${cash}`);
        balance -= cash; // removes the cash from the balance
    } else if (pinNumber !== pin) {
        // checks if pin number is incorrect
        console.log("Incorrect pin number");
    } else {
        console.log("Insufficient funds");
    }
};

cashMachine(1234, 100); // Passes in the arguments 1234 and 500.
// cashMachine(1234, 100); // 800 balance
// cashMachine(1234, 100); // 700 balance
// cashMachine(1234, 100); // 600 balance
// cashMachine(1234, 100); // 500 balance
// console.log(balance); // 500 balance

// If you run the function 5 times, the balance will be 500.

// Stretch on Activity 3 - Using multiple functions

let pin2 = 1234;
let balance2 = 1000;

const checkPin = (pinNumber) => {
    if (pinNumber === pin2) {
        return true;
    } else {
        return false;
    }
};

const checkBalance = (cash) => {
    if (cash <= balance2) {
        return true;
    } else {
        return false;
    }
};

const cashMachine2 = (pinNumber, cash) => {
    if (checkPin(pinNumber) && checkBalance(cash)) {
        console.log(`Dispensing £${cash}`);
        balance2 -= cash;
    } else if (!checkPin(pinNumber)) {
        console.log("Incorrect pin number");
    } else {
        console.log("Insufficient funds");
    }
};

cashMachine2(1234, 100); // Passes in the arguments 1234 and 500.
