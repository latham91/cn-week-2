// Create a program to calculate the number of days to your birth date.

function calculateDays(birthday) {
    let today = new Date();
    let birthDate = new Date(birthday);
    let days = Math.floor((birthDate - today) / (1000 * 60 * 60 * 24));

    return console.log(`${days} days until your birthday!`);
}

calculateDays("2024-07-08"); // Must be in YYYY-MM-DD format
