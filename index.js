"user strict";

const btn = document.createElement("button");
btn.append("Click here!");
document.body.appendChild(btn);

// btn.addEventListener("click", handleClick);

function handleClick() {
  const greenSquare = document.createElement("div");
  greenSquare.classList.add("green-square");
  document.body.append(greenSquare);
}

document.addEventListener("keydown", handleKeyPress);
function handleKeyPress(event) {
  if (event.key === "f") {
    const redSquare = document.createElement("div");
    redSquare.classList.add("red-circle");
    document.body.append(redSquare);
  }
}

function getColoredFigure(className, parentNode) {
  const coloredFigure = document.createElement("div");
  coloredFigure.classList.add(className);
  parentNode.append(coloredFigure);
}

btn.addEventListener("click", getServerData);
function getServerData() {
  const resultOfRequest = fetch("https://jsonplaceholder.typicode.com/users");
  console.log(resultOfRequest);
  resultOfRequest
    .then((data) => data.json())
    .then((readyData) => console.log(readyData));
}
