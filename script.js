const container = document.querySelector(".container");

let gridSize = 256;

for (i = 0; i < gridSize; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("square");
    gridDiv.classList.add("grid");
    container.appendChild(gridDiv);

    gridDiv.addEventListener('mouseover', () => {
        gridDiv.classList.add("black-square");
    });
}