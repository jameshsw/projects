function solution(n) {
    let result = [];
    let board = new Array(n);
    for (let i = 0; i < n; i++) {
      board[i] = new Array(n).fill('.');
    }
  
    function backtrack(row) {
      if (row === n) {
        let solution = [];
        for (let i = 0; i < n; i++) {
          solution.push(board[i].join(''));
        }
        result.push(solution);
        return;
      }
      for (let col = 0; col < n; col++) {
        if (isValid(board, row, col)) {
          board[row][col] = 'Q';
          backtrack(row + 1);
          board[row][col] = '.';
        }
      }
    }
  
    function isValid(board, row, col) {
      for (let i = 0; i < row; i++) {
        if (board[i][col] === 'Q') {
          return false;
        }
        let j = row - i;
        if (col - j >= 0 && board[i][col - j] === 'Q') {
          return false;
        }
        if (col + j < n && board[i][col + j] === 'Q') {
          return false;
        }
      }
      return true;
    }
  
    backtrack(0);
  
    // Convert the result to numeric positions
    let numericResult = [];
    for (let i = 0; i < result.length; i++) {
      let solution = [];
      for (let j = 0; j < n; j++) {
        solution.push(result[i][j].indexOf('Q') + 1);
      }
      numericResult.push(solution);
    }
  
    return numericResult;
  }
  