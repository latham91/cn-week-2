// ARRAY ACTIVITIES

// Activity 1 - Add 3 songs to an array and then remove the last one.

let favSongs = [];

favSongs.push("Song 1");
favSongs.push("Song 2");
favSongs.push("Song 3");

console.log(favSongs);

favSongs.pop();

console.log(favSongs);

// Activity 2 - choose one of the following methods and use it to iterate over the array:
// map(), shift(), unshift(), splice(), slice().
// Create a program to demonstrate the use of the method.

let students = [
    {
        name: "Alex",
        age: 25,
        grade: 78,
    },
    {
        name: "Ben",
        age: 30,
        grade: 98,
    },
    {
        name: "Charlie",
        age: 20,
        grade: 67,
    },
    {
        name: "Daisy",
        age: 22,
        grade: 88,
    },
];

// map()
let studentNames = students.map((student, index) =>
    console.log(`${index + 1}. Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`)
); // map returns a new array.

// shift()
let firstStudent = students.shift(); // Removes the first item. Didnt want to remove from original array so I created a new variable.
console.log(firstStudent);

// unshift()
students.unshift(firstStudent); // Added the student removed using shift() back to the array.

// splice()
students.splice(2, 0, { name: "Ethan", age: 21, grade: 90 }); // Added a new student to the array at index 2.
// splice can also be used to remove items from an array. the 2nd paramenter is the number of items to remove.

// slice()
let slicedStudents = students.slice(1, 3); // Start at index 1 and end at index 3, index 3 is not included.
console.log(slicedStudents); // Returns the two students at index 1 and 2.

// LOOP ACTIVITIES

// Activity 1 - Create an array that lists your favourite films. Up to 5 elements.
// Add 2 more using a method.
// Use a loop to cycle through the array.

let favFilms = ["Film 1", "Film 2", "Film 3", "Film 4", "Film 5"];

favFilms.push("Film 6");
favFilms.push("Film 7");

// for loop
console.log("For loop:");
for (let i = 0; i < favFilms.length; i++) {
    console.log(favFilms[i]);
}

// forEach loop
console.log("forEach loop:");
favFilms.forEach((film) => console.log(film));

// for...of loop
console.log("for...of loop:");
for (let film of favFilms) {
    console.log(film);
}

// for...in loop
console.log("for...in loop:");
for (let film in favFilms) {
    console.log(favFilms[film]);
}

// Activity 2 - Generate 6 random numbers between 1 - 50 and log them to the console using a loop.
console.log("6 random numbers:");
for (let i = 0; i < 6; i++) {
    console.log(Math.floor(Math.random() * 50) + 1);
}

// Activity 3 - If we can create a loop to put 0 - 9 on the screen
// how can we count from 9 - 0?
// create a loop that counts down from 9 - 0 and logs each number to the console.

console.log("Counting down from 9 - 0:");
for (let i = 9; i >= 0; i--) {
    console.log(i);
}

// Activity 4 - Display 4 films stored in an array`
// use a for loop to show each film in the array
// use an if statement to check if the 3rd film in the array is ghostbusters.

let films = ["Film 1", "Film 2", "Ghostbusters", "Film 4"];

for (let i = 0; i < films.length; i++) {
    if (films[i] === "Ghostbusters") {
        console.log("Yay it's Ghostbusters!");
    } else {
        console.log("Boo, we want Ghostbusters!");
    }
}

// Activity 5 - Generate a random number between 1-30 six times
// For each random number generated, check if this number is divisible by 7 or not.
// Log out a message to the console if its divisible by 7 or not.

console.log("Random numbers divisible by 7:");
for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * 30) + 1;
    if (randomNum % 7 === 0) {
        console.log(`${randomNum} is divisible by 7`);
    } else {
        console.log(`${randomNum} is not divisible by 7`);
    }
}

// Activity 6 - Imagine you're a programmer for a social media platform!
// you have been tasked with building a prototype for a mutual followers program.

// Create 2 arrays of followers. eg. bobsFollowers and hannahsFollowers.
// In these arrays place 4 names as strings
// Make sure there are 2 names that are in both arrays.

// using a nested loop iterate over both arrays and console log out the matching followers/

let bobsFollowers = ["Alex", "Ben", "Charlie", "Daisy"];
let hannahsFollowers = ["Alex", "Ben", "Ethan", "Frank"];

console.log("Matching followers:");
for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < hannahsFollowers.length; j++) {
        if (bobsFollowers[i] === hannahsFollowers[j]) {
            console.log(`${bobsFollowers[i]} is a mutual follower`);
        }
    }
}

// Activity 7 - Examples of do..while, while and for loops. and give the pros and cons of each.

// do...while
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);

// do...while pros - will always run at least once.
// do...while cons - can be confusing to read.

// while loop
let j = 0;
while (j < 10) {
    console.log(j);
    j++;
}

// while loop pros - easier to read.
// while loop cons - may not run at all if the condition is not met.

// for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// for loop pros - easier to read.
// for loop cons - ?
