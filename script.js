// return height and width values
function heightAndWidth() {
  let x = document.getElementById('width').value;
  let y = document.getElementById('height').value;
  const element = document.querySelector('.build');
  for (i = 1; i <= y; i++) {
    let row = document.createElement("TR");
    element.appendChild(row);
    for (c = 1; c <= x; c ++) {
      let column = document.createElement("TD")
      let placeholder = document.createTextNode(c)
      column.appendChild(placeholder);
      element.lastChild.appendChild(column);
    }
  }
}
