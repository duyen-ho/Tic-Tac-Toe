var squares = document.getElementsByClassName('square');
var message = document.getElementById('message');
var button = document.getElementById('button');

var player1 = 'X';
var player2 = 'O';
var currentPlayer = player1;

var player1Score = 0;
var player2Score = 0;
var winner;

var board = [['E', 'E', 'E'],
            ['E', 'E', 'E'],
            ['E', 'E', 'E']];

var updateGame = function() {

  if (isEmpty()) {
    recordMove();
    changeDOM();
    if (checkWin()) {
      declareWinner();
      resetGame();
    } else {
      changePlayer();
    };
  };

};

function makeEventListeners() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', updateGame);
  };
};

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

  // rethink logic - the strings/IDs are arbitrary values in this context
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
    event.target.style.color = '#1f2593';
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
  // to determine if a win condition has occured - yikes!
      // row wins
  if (((board[0][0] === board[0][1]) && (board[0][1] === board[0][2]) && (board[0][2] === currentPlayer)) ||
      ((board[1][0] === board[1][1]) && (board[1][1] === board[1][2]) && (board[1][2] === currentPlayer)) ||
      ((board[2][0] === board[2][1]) && (board[2][1] === board[2][2]) && (board[2][2] === currentPlayer)) ||
      // column wins
      ((board[0][0] === board[1][0]) && (board[1][0] === board[2][0]) && (board[2][0] === currentPlayer)) ||
      ((board[0][1] === board[1][1]) && (board[1][1] === board[2][1]) && (board[2][1] === currentPlayer)) ||
      ((board[0][2] === board[1][2]) && (board[1][2] === board[2][2]) && (board[2][2] === currentPlayer)) ||
      // diagonal wins
      ((board[0][0] === board[1][1]) && (board[1][1] === board[2][2]) && (board[2][2] === currentPlayer)) ||
      ((board[0][2] === board[1][1]) && (board[1][1] === board[2][0]) && (board[2][0] === currentPlayer))) {
      return winner = currentPlayer;
  } else {
      return false;
  };
};

var declareWinner = function() {
  if (winner === 'X') {
    player1Score += 1;
    message.textContent = 'Player 1 Wins!';
    document.getElementById('score-P1').textContent = player1Score;
  } else {
    player2Score += 1;
    message.textContent = 'Player 2 Wins!';
    document.getElementById('score-P2').textContent = player2Score;
  };
};

var resetGame = function() {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      board[i][j] = 'E';
    };
  };
  // clears all squares and displays message
  setTimeout(function() {
    message.textContent = '●_●';
    clearSquares();
  }, 1000);
};

var clearSquares = function() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
    squares[i].backgroundColor = '';
  };
};

button.addEventListener('click', function() {
  makeEventListeners();
  clearSquares();
  button.textContent = 'Reset';
});
