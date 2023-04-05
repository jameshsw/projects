function solution(grid) {
    let row = new Set();
    let col = [];
    for (let r=0;r<grid.length;r++) {
        row = new Set();
        for (let c=0;c<grid[0].length;c++) {
            if (grid[r][c]!=='.') {
            if (row.has(grid[r][c])) {
                return false;
            } else {
                row.add(grid[r][c]);
            }
            if (typeof col[c] === 'undefined') {
                col[c] = [];
                col[c].push(grid[r][c]);
            } else {
                if (col[c].includes(grid[r][c])) {
                    return false;
                } else {
                    col[c].push(grid[r][c]);
                }
            }
            }
            //3x3
            if (r<grid.length && c < grid[0].length) {
                if (r%3===0 && c%3===0){
                let m = new Set();
                for (let i=r;i<r+3;i++) {
                    for (let j=c;j<c+3;j++) {
                        if (grid[i][j]!=='.') {
                            if (m.has(grid[i][j])) {
                                return false;
                            } else {
                                m.add(grid[i][j])
                            }
                        }
                    }
                }
                }
            }
            
        }
    }
    return true;
}
