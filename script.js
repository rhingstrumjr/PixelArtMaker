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
