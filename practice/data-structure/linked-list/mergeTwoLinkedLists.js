// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(l1, l2) {
    let cur = new ListNode();
    let head = null;
    let x = Number.MAX_SAFE_INTEGER;
    let y = Number.MAX_SAFE_INTEGER;
    let next = null;
    while (l1 || l2) {
        x = l1? l1.value:Number.MAX_SAFE_INTEGER;
        y = l2? l2.value:Number.MAX_SAFE_INTEGER;
        if (x < y) {
            cur.value = x;
            l1 = l1.next;
        } else {
            cur.value = y;
            l2 = l2.next;
        }      
        if (!head) {
            head = cur;
        }
        if(l1||l2) {
            next = new ListNode();
            cur.next = next;
            cur = next;
        } 
    }
    return head;
}
