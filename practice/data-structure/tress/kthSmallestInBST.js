//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
//
function solution(t, k) {
    let arr = [];
    toArray(t,arr);
    function toArray(t, arr) {
        if (t!==null) {
            toArray(t.left,arr);
            arr.push(t.value);
            toArray(t.right,arr);            
        }
    }
    return arr[k-1];
}
