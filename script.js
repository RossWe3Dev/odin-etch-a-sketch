//* Grid creation
const grid = document.querySelector(".grid");

let gridSize = 16;

function createGridSquare() {
    const square = document.createElement("div");
    square.classList.add("square");
    square.classList.add("grid-borders");
    // Update CSS variable in .grid > .square
    grid.style.setProperty('--grid-size', gridSize);

    square.addEventListener('mouseover', () => {
        square.classList.add("black-square");
    });

    return square;
}

function generateGrid() {
    for (i = 0; i < (gridSize * gridSize); i++) {
        const square = createGridSquare();
        grid.appendChild(square);
    }
}

// Generate initial 16 * 16 grid
generateGrid();


//! BUTTONS
//* Button to change gridSize
const sizeBtn = document.querySelector(".size-btn");

sizeBtn.addEventListener('click', createNewGrid)

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

//* Hide/Show Grid button
const toggleGrid = document.querySelector(".toggle-grid");

toggleGrid.addEventListener('click', () => {
    const allSquares = document.querySelectorAll(".square");
    allSquares.forEach(square => square.classList.toggle("grid-borders"));
});
