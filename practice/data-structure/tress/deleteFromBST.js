//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function solution(t, queries) {
	for (var i = 0; i< queries.length; i++){
		t = deleteNode(t, queries[i]);
	}
	return t;
}

function removeMax(t){
	if (t.right === null) return t.left;
	t.right = removeMax(t.right);
	return t;
}

function deleteNode(t, query){
	if (t === null) return null;
	if (t.value === query){
		if (t.left) {
			let temp = t.left;      
			while(temp.right !== null) temp = temp.right;
			t.value = temp.value;
			t.left = removeMax(t.left);
		}else{
			return t.right;
		}
	}else if (t.value > query){
		t.left = deleteNode(t.left, query);
	}else {
		t.right = deleteNode(t.right, query);
	}	
	return t;
}
