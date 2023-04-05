// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(l, n) {
    if (n===0) return l;
    let size = 0;
    let cur = l;
    let last = null;
    while (cur) {
        last = cur;
        cur = cur.next;
        size = size + 1;
    }
    if (size === n) return l;
    let head = null;
    cur = l;
    let i = 1;
    while (cur && i !== size-n) {
        cur = cur.next; 
        i++;
    }
    let next = null;
    if (cur) {
        head = cur.next;
        cur.next = null;
        if (last) last.next = l;
    }
    return head;
}
