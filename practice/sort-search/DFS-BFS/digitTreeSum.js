//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
//DFS
function solution(t) {
    let sum = 0;
    trav(t, path='');
    function trav(t, path) {
        path += t.value;
        if (t.left) trav(t.left,path);
        if (t.right) trav(t.right,path);
        if (!t.left && !t.right) sum += parseInt(path);
    }
    return sum;
}
