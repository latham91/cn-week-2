// Define an array
let coffeeOrder = ["Alex - Cortado", "Ben - Cortado", "Charlie - Whatever's new", "Daisy - Latte"];
console.log(coffeeOrder);

// Accessing an array
console.log(coffeeOrder[1]);

// Changing an array
coffeeOrder[1] = "Ann - Vanilla latte";
console.log(coffeeOrder);

// Adding to an array
coffeeOrder.push("Donna - Espresso");
console.log(coffeeOrder);

// Removing from an array
coffeeOrder.pop(); // Removes the last item
console.log(coffeeOrder);

// Array length
console.log(coffeeOrder.length);

// Iterating over an array
for (let i = 0; i < coffeeOrder.length; i++) {
    console.log(coffeeOrder[i]);
}

// Iterating over an array using forEach
coffeeOrder.forEach((item) => console.log(item));

// Iterating over an array using forEach with index
coffeeOrder.forEach((item, index) => console.log(`${index}. ${item}`));

// Iterating over an array using for...of
for (let item of coffeeOrder) {
    console.log(item);
}

// Iterating over an array using for...in
for (let item in coffeeOrder) {
    console.log(item); // Prints the index
}

// Iterating over an array using for...in
for (let item in coffeeOrder) {
    console.log(coffeeOrder[item]); // Prints the value
}

// Iterating over an array using for...in
for (let item in coffeeOrder) {
    console.log(`${item}. ${coffeeOrder[item]}`); // Prints the index and the value
}

// Slice an array
let slicedCoffeeOrder = coffeeOrder.slice(1, 3); // Start at index 1 and end at index 3 (not included)
console.log(slicedCoffeeOrder);
