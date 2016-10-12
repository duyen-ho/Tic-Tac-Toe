console.log('tic tac toe');

var player1 = 'X';
var player2 = 'O';
var currentPlayer;

var player1Score = 0;
var player2Score = 0;
var counter = 0;

const TOTAL_ROUNDS = 5;
const WINNING_SCORE = 3;

var board = [['E', 'E', 'E'],
            ['E', 'E', 'E'],
            ['E', 'E', 'E']];

var b1 = board[0][0];
var b2 = board[0][1];
var b3 = board[0][2];
var b4 = board[1][0];
var b5 = board[1][1];
var b6 = board[1][2];
var b7 = board[2][0];
var b8 = board[2][1];
var b8 = board[2][2];

// squares
var s1 = document.getElementById('S1');
var s2 = document.getElementById('S2');
var s3 = document.getElementById('S3');
var s4 = document.getElementById('S4');
var s5 = document.getElementById('S5');
var s6 = document.getElementById('S6');
var s7 = document.getElementById('S7');
var s8 = document.getElementById('S8');
var s9 = document.getElementById('S9');

// code player1 first
currentPlayer = player1;

var checkEmpty = function() {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      if (board[i][j] === 'E') {
        return true;
      } else {
        return false;
      };
    };
  };
};

var recordMove = function() {
  var target = event.target.id;

  if (target === 'S1') {
    b1 = currentPlayer;
  };
  if (target === 'S2') {
    b2 = currentPlayer;
  };
  if (target === 'S3') {
    b3 = currentPlayer;
  };
  if (target === 'S4') {
    b4 = currentPlayer;
  };
  if (target === 'S5') {
    b5 = currentPlayer;
  };
  if (target === 'S6') {
    b6 = currentPlayer;
  };
  if (target === 'S7') {
    b7 = currentPlayer;
  };
  if (target === 'S8') {
    b8 = currentPlayer;
  };
  if (target === 'S9') {
    b9 = currentPlayer;
  };

  changeDOM();
  console.log('currentplayer: ' + currentPlayer);
  console.log('event target id: ' + event.target.id);
  console.log(board);
};

// temp
var changeDOM = function() {
  if (currentPlayer === player1) {
    event.target.style.backgroundColor = 'pink';
  };
  if (currentPlayer === player2) {
    event.target.style.backgroundColor = 'blue';
  };
};

var changePlayer = function() {
  if (currentPlayer === player1) {
    return currentPlayer = player2;
  } else {
    return currentPlayer = player1;
  };
};

// need to fix
var checkGameWin = function() {
  if (player1Score === WINNING_SCORE) {
    winner = player1;
    // reset game
  } else if (player2Score === WINNING_SCORE) {
    winner = player2;
    // reset game
  } else {
    console.log('it\'s a draw')
  };
};

// make event listeners
var events = function() {
  checkEmpty();
  recordMove();
  changeDOM();
  changePlayer();
  checkMatchWin();
  if (counter > 2) {
    checkGameWin();
  };


}

function makeEventListeners() {
  // var squares = document.getElementsByClassName('square'); // returns array
  // need turn complex into primitive data type or work out closures ??
  // for (var i = 0; i < squares.length; i++) {
    s1.addEventListener('click', events);
    s2.addEventListener('click', events);
    s3.addEventListener('click', events);
    s4.addEventListener('click', events);
    s5.addEventListener('click', events);
    s6.addEventListener('click', events);
    s7.addEventListener('click', events);
    s8.addEventListener('click', events);
    s9.addEventListener('click', events);
  // };
};

makeEventListeners();

// declare winner
// reset game - plays 3-5 times
// check round
// update scoreboard





// winning combinations - need to fix
// game needs to reset
var checkMatchWin = function() {
  // rows
  if (b1 === b2 && b1 == b3) {
    win = true;
    // console.log('win');
  }
  else if (b4 === b5 && b4 == b6) {
    win = true;
    // console.log('win');
  }
  else if (b7 === b8 && b7 === b9) {
    win = true;
    // console.log('win');
  }
  // columns
  else if (b1 === b4 && b1 === b7) {
    win = true;
    // console.log('win');
  }
  else if (b2 === b5 && b2 === b8) {
    win = true;
    // console.log('win');
  }
  else if (b3 === b6 && b3 === b9) {
    win = true;
    // console.log('win');
  }
  //diagonals
  else if (b1 === b5 && b1 === b9) {
    win = true;
    // console.log('win');
  }
  else if (b3 === b5 && b3 === b7) {
    win = true;
    // console.log('win');
  }
  else {
    win = false;
    console.log('lose');
    console.log(counter);
  }
  console.log(counter);
  return counter += 1;
}
