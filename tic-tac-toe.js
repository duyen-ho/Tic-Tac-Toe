var squares = document.getElementsByClassName('square');
var message = document.getElementById('message');
var button = document.getElementById('button');

var player1 = 'X';
var player2 = 'O';
var currentPlayer = player1;
var winner;

var player1Score = 0;
var player2Score = 0;

var board = [['E', 'E', 'E'],
            ['E', 'E', 'E'],
            ['E', 'E', 'E']];

var numberOfMoves = 0;
var movesForDraw = board.length * board.length;

var updateGame = function() {

  if (isEmpty()) {
    // will only run if square is empty
    if (recordMove()) {
      changeDOM();
      // checks if current player has won
      if (checkWin()) {
        declareWinner();
        resetGame();
        // winner starts first in next game
        changePlayer();
      };
        // checks for draw condition
      if (numberOfMoves !== movesForDraw) {
        // changes player for each turn
        changePlayer();
        return false;
      } else {
        message.textContent = 'It\'s a draw!';
        resetGame();
      };
    };
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
  switch (target) {
    case 'S1':
      if (board[0][0] === 'E'){
        board[0][0] = currentPlayer;
      	numberOfMoves++;
        return true;
      };
      break;
    case 'S2':
      if (board[0][1] === 'E'){
        board[0][1] = currentPlayer;
      	numberOfMoves++;
        return true;
      };
      break;
    case 'S3':
      if (board[0][2] === 'E'){
        board[0][2] = currentPlayer;
        numberOfMoves++;
        return true;
      };
      break;
    case 'S4':
      if (board[1][0] === 'E'){
        board[1][0] = currentPlayer;
        numberOfMoves++;
        return true;
      };
      break;
    case 'S5':
      if (board[1][1] === 'E'){
        board[1][1] = currentPlayer;
      	numberOfMoves++;
        return true;
      };
      break;
    case 'S6':
      if (board[1][2] === 'E'){
        board[1][2] = currentPlayer;
      	numberOfMoves++;
        return true;
      };
      break;
    case 'S7':
      if (board[2][0] === 'E'){
        board[2][0] = currentPlayer;
      	numberOfMoves++;
        return true;
      };
      break;
    case 'S8':
      if (board[2][1] === 'E'){
        board[2][1] = currentPlayer;
      	numberOfMoves++;
        return true;
      };
      break;
    case 'S9':
      if (board[2][2] === 'E'){
        board[2][2] = currentPlayer;
      	numberOfMoves++;
        return true;
      };
      break;
    default:
      return false;
      break;
  };
};

var changeDOM = function() {
  if (currentPlayer === player1) {
    event.target.textContent = 'X';
    event.target.style.color = 'pink';
    message.textContent = player2 + '\'s turn'
  };
  if (currentPlayer === player2) {
    event.target.textContent = 'O';
    event.target.style.color = '#1f2593';
    event.target.style.backgroundColor = 'transparent';
    message.textContent = player1 + '\'s turn'
  };
};

var changePlayer = function() {
  if (currentPlayer === player1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  };
};

var checkWin = function() {
  // to determine if a win condition has occured - yikes!
      // row wins
  if (( (board[0][0] === board[0][1]) && (board[0][1] === board[0][2]) && (board[0][2] === currentPlayer) ) ||
      ( (board[1][0] === board[1][1]) && (board[1][1] === board[1][2]) && (board[1][2] === currentPlayer) ) ||
      ( (board[2][0] === board[2][1]) && (board[2][1] === board[2][2]) && (board[2][2] === currentPlayer) ) ||
      // column wins
      ( (board[0][0] === board[1][0]) && (board[1][0] === board[2][0]) && (board[2][0] === currentPlayer) ) ||
      ( (board[0][1] === board[1][1]) && (board[1][1] === board[2][1]) && (board[2][1] === currentPlayer) ) ||
      ( (board[0][2] === board[1][2]) && (board[1][2] === board[2][2]) && (board[2][2] === currentPlayer) ) ||
      // diagonal wins
      ( (board[0][0] === board[1][1]) && (board[1][1] === board[2][2]) && (board[2][2] === currentPlayer) ) ||
      ( (board[0][2] === board[1][1]) && (board[1][1] === board[2][0]) && (board[2][0] === currentPlayer) )) {
      return winner = currentPlayer;
  } else {
      return false;
  };
};

var declareWinner = function() {
  if (winner === 'X') {
    player1Score += 1;
    message.textContent = currentPlayer + ' wins!';
    document.getElementById('score-P1').textContent = player1Score;
  } else {
    player2Score += 1;
    message.textContent = currentPlayer + ' wins!';
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
    numberOfMoves = 0;
    message.textContent = currentPlayer + ' starts';
    clearSquares();
  }, 1000);
};

var clearSquares = function() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
    squares[i].backgroundColor = '';
  };
};

function makeEventListeners() {
  for (var i = 0; i < squares.length; i++) {
    // this hover state is not working properly
    // possibly need to:
      // set squares to false;
      // set to true when move recorded

    // squares[i].addEventListener('mouseenter', function() {
    //   if (isEmpty()) {
    //     event.target.textContent = currentPlayer;
    //   };
    // });
    // squares[i].addEventListener('mouseout', function() {
    //   if (isEmpty()) {
    //     event.target.textContent = '';
    //   };
    // });
    squares[i].addEventListener('click', updateGame);
  };
};

button.addEventListener('click', function() {
  makeEventListeners();
  resetGame();
  button.textContent = 'Reset';
});
