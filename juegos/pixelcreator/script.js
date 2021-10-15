const paletteColors = {
  red: "rojo",
  black: "negro",
  white: "blanco",
  yellow: "amarillo",
  green: "verde",
  brown: "marron",
  purple: "violeta",
  orange: "naranja",
  lightBlue: "celeste"
};

let selectedColor;

const selectColor = (event) => {
  selectedColor = event.target.id;
  const strongTag = document.querySelector("#selected-color");
  strongTag.textContent = paletteColors[selectedColor];
};

const paintSquare = (event) => {
  if (!selectedColor) return;

  const selectedSquare = document.querySelector(`#${event.target.id}`);
  selectedSquare.className = `painterBlock ${selectedColor}`;
};

const paintSquareOnMove = (event) => {
  if (event.buttons !== 1) return;
  paintSquare(event);
};

const resetGrid = () => {
  gridSquares.forEach((square) => (square.className = "painterBlock"));
  selectedColor = null;
  const strongTag = document.querySelector("#selected-color");
  strongTag.textContent = "";
};

const colorSquares = document.querySelectorAll(".color");

colorSquares.forEach((square) => square.addEventListener("click", selectColor));

const gridSquares = document.querySelectorAll(".painterBlock");

gridSquares.forEach((square) => square.addEventListener("click", paintSquare));

gridSquares.forEach((square) =>
  square.addEventListener("mousemove", paintSquareOnMove)
);

const resetBtn = document.querySelector("#reset-btn");

resetBtn.addEventListener("click", resetGrid);
