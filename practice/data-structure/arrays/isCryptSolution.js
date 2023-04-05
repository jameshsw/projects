function solution(crypt, solution) {
    let w = [];
    for (let i=0;i<crypt.length;i++){
        let c = '';
        let s = crypt[i];
        for (let j=0;j<s.length;j++){
            let n =  getNum(solution,s[j]);
            if (s.length > 1 && j===0 && n==='0') {
                return false;
            } else {
                c = c + n;
            }
        }
        w[i] = parseInt(c);        
    }
    if (w[0]+w[1] !== w[2]) return false;
    return true;
    function getNum(solution,c) {
        for (let i=0;i<solution.length;i++) {
            if (solution[i][0]===c) {
                return solution[i][1];
            }
        }
        return '0';
    }
}
