//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
function solution(t) {
    // t.left === t.right
    if (t===null) return true;
    if (t.left ===null && t.right ===null) return true;   
    if (t.left !==null && t.right !==null) {
        if (t.left.value !== t.right.value) return false;
        let left = t.left;
        let right = t.right;
        return check(left.left, right.right) && check(left.right, right.left);
    }
    return false;
    function check(left, right) {
        if (left === null && right ===null) return true;
        if (left === null || right ===null) return false;
        if (left !==null && right!==null) {
            if (left.value !== right.value) return false;
            else if ((left.left && right.right) && (left.right && right.left)) {
                return check(left.left, right.right) &&check(left.right, right.left);
            } else if (left.left && right.right) {
                return check(left.left, right.right);
            } else if (left.right && right.left) {
                return check(left.right, right.left);            
            }
        }
        return true;
    }
}

