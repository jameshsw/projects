//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
//BFS
function solution(t) {
    if (t===null) return [];
	let res = [];
	let queue = [];
	let node = t;
	while(node) {
		res.push(node.value);
		if(node.left) queue.push(node.left);
		if(node.right) queue.push(node.right);
		node = queue.shift();
	}
	return res;
}
/*
//BFS 2
function solution(t) {
    if (t===null) return [];
	let res = [];
    let nodes = [];
	nodes.push(t);
    while (nodes.length > 0) {
        let node = nodes.shift();
		if (node) {
			nodes.push(node.left);
			nodes.push(node.right);
			res.push(node.value);
		}
    }
	return res;
}
/*
//DFS
function solution(t) {
    if (t===null) return [];
    let res = [];
    let nodes = [];
    nodes.push(t);
    while(nodes.length > 0) {
       let node = nodes.pop();
       if(node !== null) {
           nodes.push(node.right);          
           nodes.push(node.left);
           res.push(node.value);
       }
    }
    return res;
}
*/