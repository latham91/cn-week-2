// Create a program to calculate the number of days to your birth date.

function calculateDays(birthday) {
    let today = new Date();
    let birthDate = new Date(birthday);
    let days = Math.floor((birthDate - today) / (1000 * 60 * 60 * 24));

    return console.log(
        days < 0 ? `Your birthday was ${Math.abs(days) - 1} days ago.` : `Your birthday is in ${days + 1} days.`
    );
}

// Change this to your birthday to test the program
calculateDays("2024-07-08"); // Must be in YYYY-MM-DD format - ISO 8601 i think?
