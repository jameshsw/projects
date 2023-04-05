function solution(board, words) {
    const rows = board.length;
    const cols = board[0].length;
    const result = new Set();
    
    // Define a helper function to perform the DFS search
    function dfs(row, col, prefix, visited) {
      // If the prefix is in the words list, add it to the result set
      if (words.has(prefix)) {
        result.add(prefix);
      }
      
      // If the prefix is not a prefix of any word in the words list, stop searching
      if (!prefixIsPrefix(prefix)) {
        return;
      }
      
      // Mark the current cell as visited
      visited.add(`${row},${col}`);
      
      // Search the 8 neighboring cells
      for (let i = Math.max(0, row - 1); i <= Math.min(row + 1, rows - 1); i++) {
        for (let j = Math.max(0, col - 1); j <= Math.min(col + 1, cols - 1); j++) {
          // Skip the current cell and cells that have already been visited
          if (i === row && j === col || visited.has(`${i},${j}`)) {
            continue;
          }
          
          // Recursively search the neighboring cell with the updated prefix and visited set
          dfs(i, j, prefix + board[i][j], visited);
        }
      }
      
      // Mark the current cell as unvisited so that it can be used in another word
      visited.delete(`${row},${col}`);
    }
    
    // Define a helper function to check if a given prefix is a prefix of any word in the words list
    function prefixIsPrefix(prefix) {
      for (let word of words) {
        if (word.startsWith(prefix)) {
          return true;
        }
      }
      return false;
    }
    
    // Convert the words list to a set for efficient lookup
    words = new Set(words);
    
    // Perform the DFS search for each cell on the board
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        dfs(i, j, board[i][j], new Set());
      }
    }
    
    // Return the result set as a sorted array
    return [...result].sort();
  }
  