// return height and width values
function buildTable() {
  const x = document.getElementById('width').value;
  const y = document.getElementById('height').value;
  const element = document.querySelector('.build');
  for (i = 1; i <= y; i++) {
    const row = document.createElement("TR");
    element.appendChild(row);
    for (c = 1; c <= x; c ++) {
      const column = document.createElement("TD")
      element.lastChild.appendChild(column);
    }
  }
}

function removeTable() {
  let table = document.querySelector('.build');
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
  elt.style.backgroundColor = color;
}

// Adds event listener to the table so color can change
const eltable = document.querySelector('.build');
eltable.addEventListener("click", colorCells);

const elhorw = document.querySelectorAll('.tprop');
elhorw.addEventListener("valueChange", funtion() {
  removeTable();
  buildTable();
});
