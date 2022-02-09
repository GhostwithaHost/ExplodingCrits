const squares = document.querySelectorAll(".square");
const start = document.getElementById("start");
const info = document.getElementById("information");
const reset = document.getElementById("reset");

function resetBoard (){
  emptyPlayBoard = [
    { currentPlayer: null, roll: null },
    { currentPlayer: null, roll: null },
    { currentPlayer: null, roll: null },
    { currentPlayer: null, roll: null },
    { currentPlayer: null, roll: null },
    { currentPlayer: null, roll: null },
    { currentPlayer: null, roll: null },
    { currentPlayer: null, roll: null },
    { currentPlayer: null, roll: null },
    { currentPlayer: null, roll: null },
    { currentPlayer: null, roll: null },
    { currentPlayer: null, roll: null },
    { currentPlayer: null, roll: null },
    { currentPlayer: null, roll: null },
    { currentPlayer: null, roll: null },
    { currentPlayer: null, roll: null },
    { currentPlayer: null, roll: null },
    { currentPlayer: null, roll: null },
    { currentPlayer: null, roll: null },
    { currentPlayer: null, roll: null },
    { currentPlayer: null, roll: null },
    { currentPlayer: null, roll: null },
    { currentPlayer: null, roll: null },
    { currentPlayer: null, roll: null },
    { currentPlayer: null, roll: null },
  ];
  squares.innerText = ' ';


}
reset.addEventListener('click', resetBoard);


let importHTMLBoardArray = Array.from(squares);
let perChunk = 5;

let currRoll = Math.floor(Math.random() * 20 + 1);
let nextRoll = 0;

let emptyPlayBoard = [
  { currentPlayer: null, roll: null },
  { currentPlayer: null, roll: null },
  { currentPlayer: null, roll: null },
  { currentPlayer: null, roll: null },
  { currentPlayer: null, roll: null },
  { currentPlayer: null, roll: null },
  { currentPlayer: null, roll: null },
  { currentPlayer: null, roll: null },
  { currentPlayer: null, roll: null },
  { currentPlayer: null, roll: null },
  { currentPlayer: null, roll: null },
  { currentPlayer: null, roll: null },
  { currentPlayer: null, roll: null },
  { currentPlayer: null, roll: null },
  { currentPlayer: null, roll: null },
  { currentPlayer: null, roll: null },
  { currentPlayer: null, roll: null },
  { currentPlayer: null, roll: null },
  { currentPlayer: null, roll: null },
  { currentPlayer: null, roll: null },
  { currentPlayer: null, roll: null },
  { currentPlayer: null, roll: null },
  { currentPlayer: null, roll: null },
  { currentPlayer: null, roll: null },
  { currentPlayer: null, roll: null },
];



// var arrOfArrs = importHTMLBoardArray.reduce((tempArr, item, index) => {
//   const chunkIndex = Math.floor(index / perChunk);

//   if (!tempArr[chunkIndex]) {
//     tempArr[chunkIndex] = [];
//   }

//   tempArr[chunkIndex].push(item);
//   item.addEventListener("click", squareClicker);
//   return tempArr;
// }, []);

for (var i = 0; i < emptyPlayBoard.length; i++) {
  const space = document.getElementById(`s${i}`);
  space.addEventListener("click", squareClicker);
}


const bluePlayer = "x";
const redPlayer = "o";
let currentPlayer = bluePlayer;

// start.addEventListener('click', readyToPlay());

var roll;

function diceRoll() {
  nextRoll = Math.floor(Math.random() * 20 + 1);
  var displayPlayer = currentPlayer === bluePlayer ? redPlayer : bluePlayer;
  if (currRoll === 1) {
    document.getElementById("information").innerText =
      displayPlayer +
      " " +
      "has a" +
      " " +
      String(nextRoll) +
      " " +
      "what will they do next?";
  } else if (currRoll >= 2 && currRoll <= 19) {
    document.getElementById("information").innerText =
      displayPlayer +
      " " +
      "has a" +
      " " +
      String(nextRoll) +
      " " +
      "what will they do next?";
  } else if (currRoll === 20) {
    document.getElementById("information").innerText =
      displayPlayer +
      " " +
      "has a" +
      " " +
      String(nextRoll) +
      " " +
      "what will they do next?";
  }
  console.log(currRoll, nextRoll);
}

function squareClicker(event) {
  let squareId = event.currentTarget.id;
  console.log("clicked: " + squareId);

  diceRoll();

  if (!emptyPlayBoard[squareId]) {
    emptyPlayBoard[currentPlayer, currRoll] = {
      currentPlayer: currentPlayer,
      roll: currRoll
  }
  
    
    event.target.innerText = currentPlayer + " " + String(currRoll);
    
    currentPlayer = currentPlayer === bluePlayer ? redPlayer : bluePlayer;
  }
  
  

  currRoll = nextRoll;
  isWinner();
  function isWinner(){
    if (
      emptyPlayBoard.s0.currentPlayer &&
      emptyPlayBoard.s1.currentPlayer &&
      emptyPlayBoard.s2.currentPlayer &&
      emptyPlayBoard.s3.currentPlayer &&
      emptyPlayBoard.s4.currentPlayer === "x"
    ) {
      alert("Player X has won!")
      return;
    } else if (
      emptyPlayBoard.s5.currentPlayer &&
      emptyPlayBoard.s6.currentPlayer &&
      emptyPlayBoard.s7.currentPlayer &&
      emptyPlayBoard.s8.currentPlayer &&
      emptyPlayBoard.s9.currentPlayer === "x"
    ) {
      alert("Player X has won!")
      return;
    } else if (
      emptyPlayBoard.s10.currentPlayer &&
      emptyPlayBoard.s11.currentPlayer &&
      emptyPlayBoard.s12.currentPlayer &&
      emptyPlayBoard.s13.currentPlayer &&
      emptyPlayBoard.s14.currentPlayer === "x"
    ) {
      alert("Player X has won!")
      return;
    } else if (
      emptyPlayBoard.s15.currentPlayer &&
      emptyPlayBoard.s16.currentPlayer &&
      emptyPlayBoard.s17.currentPlayer &&
      emptyPlayBoard.s18.currentPlayer &&
      emptyPlayBoard.s19.currentPlayer === "x"
    ) {
      alert("Player X has won!")
      return;
    }else if (
      emptyPlayBoard.s20.currentPlayer &&
      emptyPlayBoard.s21.currentPlayer &&
      emptyPlayBoard.s22.currentPlayer &&
      emptyPlayBoard.s23.currentPlayer &&
      emptyPlayBoard.s24.currentPlayer === "x"
    ) {
      alert("Player X has won!")
      return;
    }else if (
      emptyPlayBoard.s0.currentPlayer &&
      emptyPlayBoard.s1.currentPlayer &&
      emptyPlayBoard.s2.currentPlayer &&
      emptyPlayBoard.s3.currentPlayer &&
      emptyPlayBoard.s4.currentPlayer === "o"
    ) {
      alert("Player O has won!")
      return;
    }else if (
      emptyPlayBoard.s5.currentPlayer &&
      emptyPlayBoard.s6.currentPlayer &&
      emptyPlayBoard.s7.currentPlayer &&
      emptyPlayBoard.s8.currentPlayer &&
      emptyPlayBoard.s9.currentPlayer === "o"
    ) {
      alert("Player O has won!")
      return;
    }else if (
      emptyPlayBoard.s10.currentPlayer &&
      emptyPlayBoard.s11.currentPlayer &&
      emptyPlayBoard.s12.currentPlayer &&
      emptyPlayBoard.s13.currentPlayer &&
      emptyPlayBoard.s14.currentPlayer === "o"
    ) {
      alert("Player O has won!")
      return;
    }else if (
      emptyPlayBoard.s15.currentPlayer &&
      emptyPlayBoard.s16.currentPlayer &&
      emptyPlayBoard.s17.currentPlayer &&
      emptyPlayBoard.s18.currentPlayer &&
      emptyPlayBoard.s19.currentPlayer === "o"
    ) {
      alert("Player O has won!")
      return;
    }else if (
      emptyPlayBoard.s20.currentPlayer &&
      emptyPlayBoard.s21.currentPlayer &&
      emptyPlayBoard.s22.currentPlayer &&
      emptyPlayBoard.s23.currentPlayer &&
      emptyPlayBoard.s24.currentPlayer === "o"
    ) {
      alert("Player O has won!")
      return;
    }else if (
      emptyPlayBoard.s0.currentPlayer &&
      emptyPlayBoard.s6.currentPlayer &&
      emptyPlayBoard.s12.currentPlayer &&
      emptyPlayBoard.s18.currentPlayer &&
      emptyPlayBoard.s24.currentPlayer === "x"
    ) {
      alert("Player X has won!")
      return;
    }else if (
      emptyPlayBoard.s0.currentPlayer &&
      emptyPlayBoard.s6.currentPlayer &&
      emptyPlayBoard.s12.currentPlayer &&
      emptyPlayBoard.s18.currentPlayer &&
      emptyPlayBoard.s24.currentPlayer === "o"
    ) {
      alert("Player O has won!")
      return;
    }else if (
      emptyPlayBoard.s4.currentPlayer &&
      emptyPlayBoard.s8.currentPlayer &&
      emptyPlayBoard.s12.currentPlayer &&
      emptyPlayBoard.s15.currentPlayer &&
      emptyPlayBoard.s20.currentPlayer === "x"
    ) {
      alert("Player X has won!")
      return;
    }else if (
      emptyPlayBoard.s0.currentPlayer &&
      emptyPlayBoard.s5.currentPlayer &&
      emptyPlayBoard.s10.currentPlayer &&
      emptyPlayBoard.s15.currentPlayer &&
      emptyPlayBoard.s20.currentPlayer === "x"
    ) {
      alert("Player X has won!")
      return;
    }else if (
      emptyPlayBoard.s0.currentPlayer &&
      emptyPlayBoard.s5.currentPlayer &&
      emptyPlayBoard.s10.currentPlayer &&
      emptyPlayBoard.s15.currentPlayer &&
      emptyPlayBoard.s20.currentPlayer === "o"
    ) {
      alert("Player O has won!")
      return;
    }else if (
      emptyPlayBoard.s1.currentPlayer &&
      emptyPlayBoard.s6.currentPlayer &&
      emptyPlayBoard.s11.currentPlayer &&
      emptyPlayBoard.s16.currentPlayer &&
      emptyPlayBoard.s21.currentPlayer === "x"
    ) {
      alert("Player X has won!")
      return;
    }else if (
      emptyPlayBoard.s1.currentPlayer &&
      emptyPlayBoard.s6.currentPlayer &&
      emptyPlayBoard.s11.currentPlayer &&
      emptyPlayBoard.s16.currentPlayer &&
      emptyPlayBoard.s21.currentPlayer === "o"
    ) {
      alert("Player O has won!")
      return;
    }else if (
      emptyPlayBoard.s2.currentPlayer &&
      emptyPlayBoard.s7.currentPlayer &&
      emptyPlayBoard.s12.currentPlayer &&
      emptyPlayBoard.s17.currentPlayer &&
      emptyPlayBoard.s22.currentPlayer === "x"
    ) {
      alert("Player X has won!")
      return;
    }else if (
      emptyPlayBoard.s2.currentPlayer &&
      emptyPlayBoard.s7.currentPlayer &&
      emptyPlayBoard.s12.currentPlayer &&
      emptyPlayBoard.s17.currentPlayer &&
      emptyPlayBoard.s22.currentPlayer === "o"
    ) {
      alert("Player O has won!")
      return;
    }else if (
      emptyPlayBoard.s3.currentPlayer &&
      emptyPlayBoard.s8.currentPlayer &&
      emptyPlayBoard.s13.currentPlayer &&
      emptyPlayBoard.s18.currentPlayer &&
      emptyPlayBoard.s23.currentPlayer === "x"
    ) {
      alert("Player X has won!")
      return;
    }else if (
      emptyPlayBoard.s3.currentPlayer &&
      emptyPlayBoard.s8.currentPlayer &&
      emptyPlayBoard.s13.currentPlayer &&
      emptyPlayBoard.s18.currentPlayer &&
      emptyPlayBoard.s23.currentPlayer === "o"
    ) {
      alert("Player O has won!")
      return;
    }else if (
      emptyPlayBoard.s4.currentPlayer &&
      emptyPlayBoard.s8.currentPlayer &&
      emptyPlayBoard.s14.currentPlayer &&
      emptyPlayBoard.s19.currentPlayer &&
      emptyPlayBoard.s24.currentPlayer === "x"
    ) {
      alert("Player X has won!")
      return;
    }else if (
      emptyPlayBoard.s4.currentPlayer &&
      emptyPlayBoard.s8.currentPlayer &&
      emptyPlayBoard.s14.currentPlayer &&
      emptyPlayBoard.s19.currentPlayer &&
      emptyPlayBoard.s24.currentPlayer === "o"
    ) {
      alert("Player O has won!")
      return;
    }
    
    else return false; 
  }
}


