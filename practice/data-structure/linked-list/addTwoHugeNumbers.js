// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(a, b) {
    a = reverse(a);
    b = reverse(b);
    let cur = null;
    let head = null;
    let carry = 0;
    let x = 0;
    let y = 0;
    let sum = 0;
    while (a||b) {
      x = a ? a.value:0;
      y = b ? b.value:0;
      sum = x + y+ carry;
      if (sum > 9999) {
        sum = sum - 10000;
        carry = 1;
      } else {
        carry = 0;     
      }
      let next = new ListNode(sum);
      if (!head) {
        cur = next;
        head = cur;
      } else {
        cur.next = next;
        cur = next;
      }
      if (a) a = a.next;
      if (b) b = b.next;
    }
    if(carry > 0) {
      let next = new ListNode(carry);
      cur.next = next;
    }
    return reverse(head);
  }
  
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
  