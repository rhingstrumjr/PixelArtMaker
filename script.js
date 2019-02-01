// Constructs the pixel table.
function buildTable() {
  const width = document.getElementById('width').value;
  const height = document.getElementById('height').value;
  const element = document.querySelector('.build');
  for (let i = 1; i <= height; i++) {
    const row = document.createElement("TR");
    element.appendChild(row);
    for (let c = 1; c <= width; c ++) {
      const column = document.createElement("TD");
      // column.className = "cell";
      element.lastChild.appendChild(column);
    }
  }
}


// Removes the table to allow a new one.
function removeTable() {
  const table = document.querySelector('.build');
  while (table.firstChild) {
      table.removeChild(table.firstChild);
  }
}


// Color the cells of the table
function colorCells() {
  // Get color from color picker
  let color = document.getElementById("colorChoice").value;
  // Get element the mouse is pointing to
  let clickWidthLocation = event.clientX, clickHeightLocation = event.clientY,
      elt = document.elementFromPoint(clickWidthLocation, clickHeightLocation);
  // Set cell to the color as long as only the cell is clicked
  if (!elt.hasChildNodes()){
    elt.style.backgroundColor = color;
  }
}


// Adds event listener to the table so the color can change
const eltable = document.querySelector('.build');
eltable.addEventListener("click", colorCells);
