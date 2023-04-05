function solution(arr, num) {
    let res = [];
    let sub = [];   
    bt(arr, num, 0, sub, res);
    return res;
  }
  
  function bt(arr, num, start, sub, res) {
    if (num ===0) {
      if (!res.some(subarr => JSON.stringify(subarr) === JSON.stringify(sub))) {
        res.push(sub.slice());
      }
      return;
    }
    for (let i=start;i<arr.length;i++) {
      if (num-arr[i]>=0) {
        sub.push(arr[i]);
        bt(arr, num-arr[i], i+1, sub, res);
        sub.pop();
      }
    }
  }
  
  /*
  function solution(arr, num) {
    let result = [];
    let subset = [];
  
    function backtrack(start, sum) {
      if (sum === num) {
        result.push([...subset]);
        return;
      }
      for (let i = start; i < arr.length; i++) {
        if (i > start && arr[i] === arr[i - 1]) {
          continue;
        }
        if (sum + arr[i] > num) {
          break;
        }
        subset.push(arr[i]);
        backtrack(i + 1, sum + arr[i]);
        subset.pop();
      }
    }
  
    backtrack(0, 0);
    return result;
  }
  */