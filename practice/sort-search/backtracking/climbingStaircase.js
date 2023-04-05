function solution(n, k) {
    let res = [];
    let cur = [];
    jump(n,k,cur,res);
    return res;  
  }
  function jump(n,k,cur,res) {
    if (n === 0) {
      res.push(cur.slice());
      return;
    }
    for (let i=1;i<=k;i++) {
      if ((n-i)>=0) {
        cur.push(i);
        jump(n-i,k,cur,res);
        cur.pop();
      }
    }
  }
  /*
  function solution(n, k) {
    const sequences = [];
  
    function jump(current, sequence) {
      if (current === n) {
        sequences.push(sequence);
        return;
      }
  
      for (let i = 1; i <= k && current + i <= n; i++) {
        jump(current + i, sequence.concat(i));
      }
    }
  
    jump(0, []);
    return sequences.sort();
  }
  */
  