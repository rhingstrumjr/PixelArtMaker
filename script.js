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
      let placeholder = document.createTextNode(c)
      column.appendChild(placeholder);
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
  let cw = event.clientX, ch = event.clientY,
      elt = document.elementFromPoint(cw, ch);
  elt.style.backgroundColor = color;
}

var el = document.querySelector('.build');
el.addEventListener("click", colorCells);
