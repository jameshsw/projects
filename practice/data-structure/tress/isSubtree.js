//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function solution(t1, t2) {
    if (t2 === null) return true;
    if (t1 === null) return false;
    return check(t1, t2);
    function check(t1, t2) {
        if(t1 === null && t2 === null) return true;
        if(t1 === null || t2 === null) return false;
        if (t1.value === t2.value) {
            return check(t1.left, t2.left) && check(t1.right, t2.right);
        } else {
            return check(t1.left, t2) || check(t1.right, t2);
        }        
    }
}
