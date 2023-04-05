function solution(nums, queries) {
    let pre = [];
    let n = nums.length;
    pre[0] = nums[0];
    for (let i = 1; i < n; i++) {
        pre[i] = nums[i] + pre[i - 1];
    }
    let accumulator = 0;
    let mod = 1e9+7;    
    for(let i = 0; i < queries.length; i++){
        if (queries[i][0] === 0) {
            accumulator += pre[queries[i][1]];
        } else {
            accumulator += pre[queries[i][1]] - pre[queries[i][0] - 1];
        }
    }
    return accumulator < 0 ? ((accumulator % mod) + mod) % mod : accumulator%mod;    
}
