//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function solution(t, s) {
    if (t === null) 
        if (s===0)return true
        else return false;
    if (t.left !== null && t.right !== null)
        return solution(t.left,s-t.value) || solution(t.right,s-t.value);
    else if (t.left !== null)
        return solution(t.left,s-t.value);
    else if (t.right !== null)
        return solution(t.right,s-t.value);
    else
        if (t.value ===s) return true;
        else return false;    
}
