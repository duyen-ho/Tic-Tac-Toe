console.log('tic tac toe');

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

// make event listeners
var updateGame = function() {
  if ( isEmpty() ) {
    // console.log('yes');
    recordMove();
    changeDOM();
    // console.log('currentplayer: ' + currentPlayer);
    // console.log('event target id: ' + event.target.id);
    console.table(board);
    changePlayer();

    if ( checkWin() ) {
      declareWinner();
      resetGame();  // setTimeout
    } else {
      return false;
    }

  } else {
    return false;
    return console.log('false, not updated')
  };
};

function makeEventListeners() {
  var squares = document.getElementsByClassName('square');
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

// rethhink
var checkWin = function() {

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      // to determine if a win condition has occured
      if (board[i][i] !== 'E') {

        switch (...) {
          // row wins
          case board[0][0] === board[0][1] && board[0][0] === board[0][2]:
              console.log('check win switch works');
              console.log('winner 1 block executed');
              winner = board[0][0];
              break;
          case board[1][0] === board[1][1] && board[1][0] === board[1][2]:
              winner = board[1][0];
              break;
          case board[2][0] === board[2][1] && board[2][0] === board[2][2]:
              winner = board[2][0];
              break;
          // column wins
          case board[0][0] === board[1][0] && board[0][0] === board[2][0]:
              winner = board[0][0];
              break;
          case board[0][1] === board[1][1] && board[0][1] === board[2][1]:
              winner = board[0][1];
              break;
          case board[0][2] === board[1][2] && board[0][2] === board[2][2]:
              winner = board[0][2];
              break;
          // diagonal wins
          case board[0][0] === board[1][1] && board[0][0] === board[2][2]:
              winner = board[0][0];
              break;
          case board[0][2] === board[1][1] && board[0][2] === board[2][0]:
              winner = board[0][2];
              break;
          default:
          console.log('winner = false');
              return winner = false;
        };

      } else {
        return false;
      }
    }
  }
}


var declareWinner = function() {
  console.log('declareWinner works');
  if (winner === 'X') {
    player1Score += 1;
    document.getElementById('message').innerHTML = 'Player 1 Wins!';
    document.getElementById('score-P2').textContent = player1Score;
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
  console.table(board);
  // clear all squares - DOM

  // play again prompt - DOM

};



// criteria
// Design logic for winning & visually display which player won
// DRY (Don't Repeat Yourself)
// Use Javascript or jQuery for DOM manipulation - change classes
// Deploy your game online

// Deliverables
// A link to your hosted working game in the URL section of your GitHub repo
// A readme.md file with explanations of the technologies used, the approach taken,
// installation instructions, unsolved problems, etc.
