//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function solution(inorder, preorder) {
    if (preorder.length === 0) return null;
    let root = new Tree(preorder[0]);
    let rootIndex = inorder.indexOf(preorder[0]);
    let leftInorder = inorder.slice(0, rootIndex);
    let rightInorder = inorder.slice(rootIndex + 1);
    let leftPreorder = preorder.slice(1, leftInorder.length + 1);
    let rightPreorder = preorder.slice(leftInorder.length + 1);
    root.left = solution(leftInorder,leftPreorder);
    root.right = solution(rightInorder,rightPreorder);
    return root;
}
