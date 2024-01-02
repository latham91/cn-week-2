const gridOne = [
    ["   ", " | ", "   ", " | ", "   "],
    ["   ", " | ", "   ", " | ", "   "],
    ["---", "---", "---", "---", "---"],
    ["   ", " | ", "   ", " | ", "   "],
    ["   ", " | ", "   ", " | ", "   "],
    ["---", "---", "---", "---", "---"],
    ["   ", " | ", "   ", " | ", "   "],
    ["   ", " | ", "   ", " | ", "   "],
];

function logGridOne() {
    for (let i = 0; i < gridOne.length; i++) {
        console.log(gridOne[i].join(""));
    }
}

logGridOne();

/////////////////////////////////////////////////////////////

function logGridTwo() {
    for (let i = 1; i <= 8; i++) {
        if (i % 3 === 0) {
            console.log("---------------");
        } else {
            console.log("    |     |    ");
        }
    }
}

logGridTwo();

/////////////////////////////////////////////////////////////

console.log("    |    |    ");
console.log("    |    |    ");
console.log("--------------");
console.log("    |    |    ");
console.log("    |    |    ");
console.log("--------------");
console.log("    |    |    ");
console.log("    |    |    ");

/////////////////////////////////////////////////////////////

const gridObj = {
    1: "    |     |    ",
    2: "    |     |    ",
    3: "---------------",
    4: "    |     |    ",
    5: "    |     |    ",
    6: "---------------",
    7: "    |     |    ",
    8: "    |     |    ",
};

function logGridThree() {
    for (let i = 1; i <= 8; i++) {
        console.log(gridObj[i]);
    }
}

logGridThree();

/////////////////////////////////////////////////////////////

gridFourArr = [
    `    |    |    \n    |    |    \n--------------\n    |    |    \n    |    |    \n--------------\n    |    |    \n    |    |    `,
];

function logGridFour() {
    for (let i = 0; i < gridFourArr.length; i++) {
        console.log(gridFourArr[i]);
    }
}

logGridFour();

/////////////////////////////////////////////////////////////

function logGridFive() {
    const grid = [
        "   |   |    ",
        "   |   |    ",
        "   |   |    ",
        "------------",
        "   |   |    ",
        "   |   |    ",
        "   |   |    ",
        "------------",
        "   |   |    ",
        "   |   |    ",
        "   |   |    ",
    ];

    for (const key of grid) {
        console.log(`${key}`);
    }
}

logGridFive();
