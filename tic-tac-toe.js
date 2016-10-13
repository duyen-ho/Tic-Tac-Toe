var player1 = 'X';
var player2 = 'O';
var currentPlayer = player1;

var player1Score = 0;
var player2Score = 0;
var winner;

var board = [['E', 'E', 'E'],
            ['E', 'E', 'E'],
            ['E', 'E', 'E']];

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

var updateGame = function() {
  if ( isEmpty() ) {
    recordMove();
    changeDOM();
    if ( checkWin() ) {
      declareWinner();
      resetGame();
    } else {
      changePlayer();
    };
  };
};

var squares = document.getElementsByClassName('square');

function makeEventListeners() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', updateGame);
  };
};

makeEventListeners();

var isEmpty = function() {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      if (board[i][j] === 'E') {
        return true;
      } else {
      };
    };
  };
  return false;
};

var recordMove = function() {
  var target = event.target.id;

  if (target === 'S1') {
    return board[0][0] = currentPlayer;
  };
  if (target === 'S2') {
    return board[0][1] = currentPlayer;
  };
  if (target === 'S3') {
    return board[0][2] = currentPlayer;
  };
  if (target === 'S4') {
    return board[1][0] = currentPlayer;
  };
  if (target === 'S5') {
    return board[1][1] = currentPlayer;
  };
  if (target === 'S6') {
    return board[1][2] = currentPlayer;
  };
  if (target === 'S7') {
    return board[2][0] = currentPlayer;
  };
  if (target === 'S8') {
    return board[2][1] = currentPlayer;
  };
  if (target === 'S9') {
    return board[2][2] = currentPlayer;
  };
};

var changeDOM = function() {
  if (currentPlayer === player1) {
    event.target.textContent = 'X';
    event.target.style.color = 'pink';
  };
  if (currentPlayer === player2) {
    event.target.textContent = 'O';
    event.target.style.color = '#1F2593';
    event.target.style.backgroundColor = 'transparent';
  };
};

var changePlayer = function() {
  if (currentPlayer === player1) {
    return currentPlayer = player2;
  } else {
    return currentPlayer = player1;
  };
};

var checkWin = function() {
  // to determine if a win condition has occured
        // row wins
  if (  ( (board[0][0] === board[0][1]) && (board[0][1] === board[0][2]) && (board[0][2] === currentPlayer) ) ||
            ( (board[1][0] === board[1][1]) && (board[1][1] === board[1][2]) && (board[1][2] === currentPlayer) ) ||
            ( (board[2][0] === board[2][1]) && (board[2][1] === board[2][2]) && (board[2][2] === currentPlayer) ) ||
            // column wins
            ( (board[0][0] === board[1][0]) && (board[1][0] === board[2][0]) && (board[2][0] === currentPlayer) ) ||
            ( (board[0][1] === board[1][1]) && (board[1][1] === board[2][1]) && (board[2][1] === currentPlayer) ) ||
            ( (board[0][2] === board[1][2]) && (board[1][2] === board[2][2]) && (board[2][2] === currentPlayer) ) ||
            // diagonal wins
            ( (board[0][0] === board[1][1]) && (board[1][1] === board[2][2]) && (board[2][2] === currentPlayer) ) ||
            ( (board[0][2] === board[1][1]) && (board[1][1] === board[2][0]) && (board[2][0] === currentPlayer) ) ) {
      return winner = currentPlayer;
  } else {
      console.log('winner: false');
      return false;
  };
};

var declareWinner = function() {
  if (winner === 'X') {
    player1Score += 1;
    document.getElementById('message').innerHTML = 'Player 1 Wins!';
    document.getElementById('score-P1').textContent = player1Score;
  } else {
    player2Score += 1;
    document.getElementById('message').innerHTML = 'Player 2 Wins!';
    document.getElementById('score-P2').textContent = player2Score;
  }
};

var resetGame = function() {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      board[i][j] = 'E';
    };
  };
  // clear all squares - DOM
  setTimeout(clearSquares, 2000);
  // play again - DOM

};

var clearSquares = function() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerHTML = '';
    squares[i].backgroundColor = '';
  };
};

var button = document.getElementById('button');
button.addEventListener('click', clearSquares);



// criteria
// Design logic for winning & visually display which player won
// DRY (Don't Repeat Yourself)
// Use Javascript or jQuery for DOM manipulation - change classes
// Deploy your game online

// Deliverables
// A link to your hosted working game in the URL section of your GitHub repo
// A readme.md file with explanations of the technologies used, the approach taken,
// installation instructions, unsolved problems, etc.
