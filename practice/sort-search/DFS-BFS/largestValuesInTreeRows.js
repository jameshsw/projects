//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function solution(t,level=0,res=[]) {
    if (t) {
        res[level] = res[level]?Math.max(res[level],t.value):t.value;
        solution(t.left,level+1,res);
        solution(t.right,level+1,res);
    }     
    return res;
}
/*
function solution(t) {
    if (!t) return [];
    let res = [];
    trav(t,0,res);
    return res;
}
function trav(node,level,res) {
    if (!node) return null;
    if (level < res.length) {
        if (node.value>res[level]) res[level] = node.value;
    } else {
        res.push(node.value);
    }
    trav(node.left,level+1,res);
    trav(node.right,level+1,res); 
}
*/