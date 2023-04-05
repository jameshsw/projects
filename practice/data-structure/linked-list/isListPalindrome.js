// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(l) {
    if (!l || !l.next) return true;
    let fast = l;
    let slow = l;
    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    slow = reverse(slow.next);
    while (slow) {
        if(l.value !== slow.value) return false;
        l = l.next;
        slow = slow.next;
    }
    return true;
};

function reverse(cur) {
    let prev = null;
    let next = null;
    while (cur) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}
