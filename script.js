//* Grid creation and starting variables
const grid = document.querySelector(".grid");

let gridSize = 16;
let randomColor = '';
let gridIsON = true;
let rainbowIsON = false;

// Generate initial 16 * 16 grid
generateGrid();


//! FUNCTIONS
function generateGrid() {
    for (i = 0; i < (gridSize * gridSize); i++) {
        const square = generateGridSquare();
        grid.appendChild(square);
    }
}

function generateGridSquare() {
    // Update CSS variable in .grid which then changes height and width of squares
    grid.style.setProperty('--grid-size', gridSize);

    const square = document.createElement("div");
    square.classList.add("square");
    checkGridToggle(square);        //* must call the parameter

    applyColor(square);

    return square;
}

function checkGridToggle(square) {
    if (gridIsON) {
        square.classList.add("grid-borders");
    }
}

function applyColor(square) {
    square.addEventListener('mouseover', () => {
        if (rainbowIsON) {
            // Update .square background-color
            randomColor = generateRGBColor();
            square.style.setProperty('--square-color', randomColor);
        } else {
            square.style.setProperty('--square-color', 'black');
        }
        square.classList.add("colored-square");
    });
}

function generateRGBColor() {
    let rgbString = "rgb(";

    for (let i = 0; i < 3; i++) {
        const randomValue = Math.floor(Math.random() * 256); // Generate random number between 0 and 255
        rgbString += `${randomValue},`;
    }

    rgbString = rgbString.slice(0, -1); // Remove the last character (comma)
    rgbString += ")";
    return rgbString;   // returns a random rgb string
}

function generateNewGrid() {
    let newGridSize = parseInt(prompt("Enter number of squares per side for a new grid.\n\nPlease pick a NUMBER between 1 and 100"), 10);

    if (!newGridSize) {
        alert("Please enter a valid number");
        return;
    } else if (newGridSize <= 0 || newGridSize > 100) {
        alert("Please enter a number between 1 and 100");
        return;
    }

    clearGrid();
    gridSize = newGridSize;
    generateGrid();
}

function clearGrid() {
    grid.innerHTML = '';
}


//! BUTTONS
const sizeBtn = document.querySelector(".size-btn");
const toggleGrid = document.querySelector(".toggle-grid");
const toggleRainbow = document.querySelector(".toggle-rainbow");
const clearBtn = document.querySelector(".clear");

//* Button to change gridSize
sizeBtn.addEventListener('click', generateNewGrid)


//* Hide/Show Grid by toggling .grid-borders selector in CSS
toggleGrid.classList.add("active");

toggleGrid.addEventListener('click', () => {
    toggleGrid.classList.toggle("active")
    gridIsON = !gridIsON
    const allSquares = document.querySelectorAll(".square");
    allSquares.forEach(square => square.classList.toggle("grid-borders"));
    return gridIsON;
});


//* Random colors button
toggleRainbow.addEventListener('click', () => {
    toggleRainbow.classList.toggle("active");
    rainbowIsON = !rainbowIsON;
    return rainbowIsON;
})

//* Clear button
clearBtn.addEventListener('click', () => {
    clearGrid();
    generateGrid(gridSize);
})