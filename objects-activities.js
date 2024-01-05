// Lesson activity -- create an object called person with a key called name and set the value to your name
// add another key called age.
// further activity add list of favourite songs to person object and log them to console.

let person = {
    name: "Aaron",
    // age: 30  // can be added here or below
};

person.age = 30; // add age key to person object
person.favSongs = ["song1", "song2", "song3", "song4"]; // add favSongs key to person object

console.log(person.age);

// favSongs logs
console.log(person.favSongs); // logs array of favSongs
console.log(person["favSongs"]); // using bracket notation
console.log(person.favSongs[2]); // song3 in the array at index 2
person.favSongs.forEach((song) => console.log(song)); // iterates through array and logs each song

///////////////////////////////////////////////////////////////

// Lesson activity 2 - create a key called weekendAlarm, with a value saying "no alarm needed" and a key called weekdayAlarm, with a value of saying "get up at 7am".
// create a variable called day and one called alarm.
// If day is Saturday or Sunday, set alarm to weekendAlarm. If day is a weekday, set alarm to weekdayAlarm

// Turned this into a function so I can call it with different days.

let alarmObj = {
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "get up at 7am",
};
let alarm;

const alarmClock = (day) => {
    if (day === "Saturday" || day === "Sunday") {
        alarm = alarmObj.weekendAlarm;
    } else {
        alarm = alarmObj.weekdayAlarm;
    }
    return alarm;
};

console.log(alarmClock("Monday"));

///////////////////////////////////////////////////////////////

// ACTIVITY 1
// Let's edit our person object to include
// A function called sayHi and when it's called, it shout return "Hello my name is ${this.name}"

let activityOnePerson = {
    name: "Aaron",
    age: 32,
    sayHi: function () {
        // can also be written as sayHi(), when using arrow function the 'this' keyword will not work
        return `Hello my name is ${this.name}`;
    },
};

console.log(activityOnePerson.sayHi());

///////////////////////////////////////////////////////////////

// ACTIVITY 2
// Create an object called pet with the key values of:
// name, typeOfPet, age, colour. and methods called eat and drink. they should return a string saying "[pet name] is eating/drinking".

let pet = {
    name: "Sully",
    age: 2,
    colour: "grey",
    typeOfPet: "cat",

    eat: function () {
        return `${this.name} is eating`;
    },

    drink: function () {
        return `${this.name} is drinking`;
    },

    // can also be writted with eat() and drink() when using arrow function the 'this' keyword will not work
};

console.log(pet.eat());

///////////////////////////////////////////////////////////////

// ACTIVITY 3
// Create an object called coffeeShop with key values of:
// branch, drinks with prices, food with prices, and methods called drinksOrdered and foodOrdered.
// they should return a string saying [your name] is... with all items chosen with costs and total cost.

// Changed up the methods a little to make more sense to me.
// Also added order and total.

let coffeeShop = {
    branch: "Preston",
    drinks: {
        latte: 2.5,
        americano: 2,
        tea: 1.5,
    },
    food: {
        sandwich: 3,
        cake: 2.5,
        soup: 2,
    },
    order: [],
    total: 0,

    // methods
    orderDrink: function (drink) {
        if (drink in this.drinks) {
            // make sure the drink they order is in the list of drinks.
            this.order.push(drink);
            this.total += this.drinks[drink];
            return `You have ordered a ${drink}, your total so far is £${this.total}`;
        } else {
            return "Sorry we don't sell that drink";
        }
    },

    orderFood: function (food) {
        if (food in this.food) {
            // make sure the food they order is in the list of food.
            this.order.push(food);
            this.total += this.food[food];
            return `You have ordered a ${food}, your total so far is £${this.total}`;
        } else {
            return "Sorry we don't sell that food";
        }
    },

    completeOrder: function () {
        console.log(`Thank you for your order!\nYour order is: ${this.order}\nYour total is: £${this.total}`);

        this.order = [];
        this.total = 0;

        return "Please come again";
    },
};

console.log(coffeeShop.orderDrink("latte"));
console.log(coffeeShop.orderFood("sandwich"));
console.log(coffeeShop.orderFood("cake"));
console.log(coffeeShop.completeOrder());
