// Activity 1 - Create a variable called age. Write an if statement that logs "Yes I can serve you" if the age is greater than 17
// else logs "You aren't old enough".
// Stretch add country variable to check if they are from the UK.

function checkAge(age, country) {
    if (age > 17 && country === "UK") {
        console.log("Yes I can serve you");
    } else {
        console.log("You aren't old enough or you are not from the UK.");
    }
}

checkAge(18, "UK");

// Activity 2 - Create a variable for any pizza topping.
// Create a switch statement, if the topping is one of your favourite ingredients, log to the console "These are important ingredients for my pizza."
// If you dont mind having Pepperoni for example, log the comment "I dont mind having { topping } on my pizza."

function checkTopping(topping) {
    const favToppings = ["Spicy Beef", "Chorizo", "Bacon", "Pepperoni"];
    const goodToppings = ["Chicken", "Ham", "Mushroom", "Sweetcorn"];
    const badToppings = ["Pineapple", "Olives", "Anchovies"];

    switch (true) {
        case favToppings.includes(topping):
            console.log("These are important ingredients for my pizza.");
            break;
        case goodToppings.includes(topping):
            console.log(`I don't mind having ${topping} on my pizza.`);
            break;
        case badToppings.includes(topping):
            console.log(`${topping} should not be on a pizza!.`);
            break;
        case !topping:
            console.log("You must enter a topping.");
            break;
        default:
            console.log(`I guess ${topping} is ok.`);
    }
}

checkTopping("Pepperoni");

// Activity 3 - Create a variable called password.
// Check how many letters are in the password, if there are less than 8 log to the console that the password is too short.
// Otherwise log the password to the console.

function checkPassword(password) {
    pwLength = password.length;

    if (pwLength < 8) {
        console.log("Password is too short.");
    } else {
        console.log(`Password is ${password}`);
    }
}

checkPassword("password123");

// Activity 3 Stretch - Create a variable called num.
// Check if the variable is divisible by 3 or 5. If it is log "This number is divisible by 3 or 5" to the console.

function checkNum(num) {
    if (num % 3 === 0 || num % 5 === 0) {
        console.log("This number is divisible by 3 or 5");
    } else {
        console.log("This number is not divisible by 3 or 5");
    }
}

checkNum(30);

// Activity 4 - Create a variable called num.
// If num is divisible by 3 log "fizz" to the console, if it's divisible by 5 log "buzz" to the console, if it's divisible by both 3 and 5 log "fizz buzz" to the console.

function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("fizz buzz");
    } else if (num % 3 === 0) {
        console.log("fizz");
    } else if (num % 5 === 0) {
        console.log("buzz");
    } else {
        console.log("This number is not divisible by 3 or 5");
    }
}

fizzBuzz(30);

// Activity 5 - Create a variable called num.
// Check if the number is a palindrome (looks the same forward as it does backwards e.g. 1001 or 20202).

function checkPalindrome(num) {
    let stringNum = num.toString();
    let reversedNum = stringNum.split("").reverse().join("");

    if (stringNum === reversedNum) {
        console.log(`${num} is a palindrome.`);
    } else {
        console.log(`${num} is not a palindrome.`);
    }
}

checkPalindrome(20202);

// Activity 6 - Create a variable called time, a variable called placeOfWork and a variable called townOfHome.
// Create an if statement that logs to the console where someone is at times of the day.
// E.g. if the time is 7 I'm at home, at 8 I'm commuting, at 9 I'm at work.

// Using ternary operator just for fun and to make it slightly harder.

function checkTime(time) {
    let placeOfWork = "Code Nation";
    let townOfHome = "Manchester";

    console.log(`
        ${
            time > 7 && time < 9
                ? `I'm commuting to ${placeOfWork}`
                : time >= 9 && time < 17
                ? `I'm at ${placeOfWork}`
                : time >= 17 && time < 19
                ? `I'm commuting to ${townOfHome}`
                : !time
                ? `You must enter a time.`
                : `I'm at home in ${townOfHome}`
        }`);
}

checkTime(12);

// Activity 7 - Take the string: "jfrndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi".
// Find the index of a last vowel in the string.

// Added some extra commnets to keep track of the logic in my head.

function findLastVowel(string) {
    let vowels = ["a", "e", "i", "o", "u"];
    let splitText = string.split("").reverse(); // Reverses the string and splits into an array of each letter.
    let lastVowel = splitText.find((letter) => vowels.includes(letter)); // Finds the first vowel it comes across in the reversed array.

    console.log(`The last vowel is "${lastVowel}" and it is at index "${string.lastIndexOf(lastVowel)}"`);
    // Find the last index of the vowel it found in the original string.
}

findLastVowel("jfrndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi");

// Activity 8 - Create a variable called word that takes a string.
// Create an if statement that checks if the last letter is the same as the first.
// If it is return true, otherwise return false.

// Instead of using word as a variable I have made it an argument for the function.

function checkFirstLastLetter(word) {
    const first = word.charAt(0);
    const last = word.charAt(word.length - 1);

    console.log(first === last ? true : false);
}

checkFirstLastLetter("hello");

// Activity 9 - Create two variables called num1 and num2.
// Create an if statement that checks if the result of the sum is even.
// If it is return the number, otherwise return the numbers multiplied together.

function checkEven(num1, num2) {
    let sum = num1 + num2;

    if (sum % 2 === 0) {
        console.log(`Even (Add) - ${sum}`);
    } else {
        console.log(`Odd (Multiply) - ${num1 * num2}`);
    }
}

checkEven(2, 2);
