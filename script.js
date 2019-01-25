// Constructs the pixel table.
function buildTable() {
  const x = document.getElementById('width').value;
  const y = document.getElementById('height').value;
  const element = document.querySelector('.build');
  for (let i = 1; i <= y; i++) {
    const row = document.createElement("TR");
    element.appendChild(row);
    for (let c = 1; c <= x; c ++) {
      const column = document.createElement("TD");
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
  let cw = event.clientX, ch = event.clientY,
      elt = document.elementFromPoint(cw, ch);
  // Set cell to the color
  elt.style.backgroundColor = color;
}


// Adds event listener to the table so the color can change
const eltable = document.querySelector('.build');
eltable.addEventListener("click", colorCells);
