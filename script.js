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

for (i = 0; i < (gridSize * gridSize); i++) {
    const square = createGridSquare();
    grid.appendChild(square);
}