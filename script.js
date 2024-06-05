//* Grid creation and starting variables
const grid = document.querySelector(".grid");

let gridSize = 16;
let randomColor = '';
let rainbowIsON = false;

// Generate initial 16 * 16 grid
generateGrid();


//! FUNCTIONS
function generateGrid() {
    for (i = 0; i < (gridSize * gridSize); i++) {
        const square = createGridSquare();
        grid.appendChild(square);
    }
}

function createGridSquare() {
    // Update CSS variable in .grid which then changes height and width of squares
    grid.style.setProperty('--grid-size', gridSize);

    const square = document.createElement("div");
    square.classList.add("square");
    square.classList.add("grid-borders");

    applyColor(square);     //* Must pass the parameter square

    return square;
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

function createNewGrid() {
    let newGridSize = parseInt(prompt("Enter number of squares per side for a new grid.\n\nPlease pick a NUMBER between 1 and 100"), 10);

    if (!newGridSize) {
        alert("Please enter a valid number");
        return;
    } else if (newGridSize <= 0 || newGridSize > 100) {
        alert("Please enter a number between 1 and 100");
        return;
    }

    grid.innerHTML = '';
    gridSize = newGridSize;
    generateGrid();
}


//! BUTTONS
//* Button to change gridSize
const sizeBtn = document.querySelector(".size-btn");
sizeBtn.addEventListener('click', createNewGrid)


//* Hide/Show Grid by toggling .grid-borders selector in CSS
const toggleGrid = document.querySelector(".toggle-grid");
toggleGrid.addEventListener('click', () => {
    const allSquares = document.querySelectorAll(".square");
    allSquares.forEach(square => square.classList.toggle("grid-borders"));
});


//* Random colors button
const toggleRainbow = document.querySelector(".toggle-rainbow");
toggleRainbow.addEventListener('click', () => {
    rainbowIsON = !rainbowIsON;
    return rainbowIsON;
})