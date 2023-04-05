// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(l, k) {
    let head = null; // nw head
    let next = null; // next chunk
    let tmp = null;
    while (l) {
        next = l;
        let i = 1;
        while (l && i<k) { // loop through k block
            l = l.next;    
            i++;
        }
        if (i===k) { // enough elements in k block
            if (l) {
                tmp = l.next; // set new next block
                l.next = null; // break current block
                next = reverse(next); // reverse current block
                l = tmp; // set new l
            }
        } else { // not enough k block, end
            l = null; // while loop
        }
        if (!head) { // set new head
            head = next;
        } else { // join new
            let cur = head;
            while(cur.next) {
                cur = cur.next;
            }
            cur.next = next;   
        }
    }
    return head;
}

function reverse(cur) {
    let next = null;
    let prev = null;
    while (cur) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}
