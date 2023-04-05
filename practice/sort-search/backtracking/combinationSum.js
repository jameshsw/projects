function solution(a, sum) {
    a.sort(function(a, b) { return a - b; });
    let list = [];
    let cur = [];
    backtrack(sum,a,cur,0,list);
    if (list.length===0) return 'Empty';
    return list.join('');
  }
  function backtrack(remain, a, cur, start, list) {
    if (remain ===0) {
      let tmp = '(' + cur.join(' ') + ')';
      if (!list.includes(tmp)) list.push(tmp);
      return;
    }
    for (let i=start;i<a.length;i++) {
      if (remain-a[i]>=0) {
        cur.push(a[i]);
        backtrack(remain-a[i],a,cur,i,list);
        cur.pop();
      }
    }
  }
  