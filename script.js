const squares = document.querySelectorAll(".square");
const start = document.getElementById("start");
const info = document.getElementById("information");
const name = document.getElementById("roll");
let importHTMLBoardArray = Array.from(squares);
let perChunk = 5;

let currRoll = Math.floor(Math.random() * 20 + 1);
let nextRoll = 0;

let emptyPlayBoard = [
  [], [], [], [], [], 
  [], [], [], [], [], 
  [], [], [], [], [],
  [], [], [], [], [], 
  [], [], [], [], [],
];

var arrOfArrs = importHTMLBoardArray.reduce((tempArr, item, index) => {
  const chunkIndex = Math.floor(index / perChunk);

  if (!tempArr[chunkIndex]) {
    tempArr[chunkIndex] = [];
  }

  tempArr[chunkIndex].push(item);
  item.addEventListener("click", squareClicker);
  return tempArr;
}, []);

const bluePlayer = "x";
const redPlayer = "o";
let currentPlayer = bluePlayer;

// start.addEventListener('click', readyToPlay());


var roll;

function diceRoll() {
  nextRoll = Math.floor(Math.random() * 20 + 1);
  var displayPlayer = currentPlayer === bluePlayer ? redPlayer : bluePlayer
  if (currRoll === 1) {
    document.getElementById("information").innerText =
      currentPlayer + " " + "has a 1!" + " " + "What a CRIT!";
  } else if (currRoll >= 2 && currRoll <= 19) {
    document.getElementById("information").innerText =
      displayPlayer +
      " " +
      "has a" +
      " " +
      String(nextRoll) +
      " " +
      "what will they do next?";
  } else {
    document.getElementById("information").innerText =
      currentPlayer + " " + "has a 20!" + " " + "What a CRIT!";
  }console.log(currRoll, nextRoll)
}


function squareClicker(event) {
  let squareId = event.currentTarget.id;
  console.log("clicked: " + squareId);
  
  diceRoll();
  if (!emptyPlayBoard[squareId]) {
    emptyPlayBoard[squareId] = currentPlayer + " " + currRoll;
    event.target.innerText = currentPlayer + " " + String(currRoll);
    currentPlayer = currentPlayer === bluePlayer ? redPlayer : bluePlayer;
    
    
    
    
    
    boomChecker();
  }
  
  function boomChecker(){
    let split = emptyPlayBoard[squareId].split(' ');
    let parsedNum = parseInt(split[1]);
    let stringOfSplit = split.splice(0,1);
    emptyPlayBoard[squareId].unshift(parsedNum);
    emptyPlayBoard[squareId].unshift(stringOfSplit);
    console.log(emptyPlayBoard);
    console.log(stringOfSplit, parsedNum);
    return;
    
  }
  currRoll = nextRoll;
}
