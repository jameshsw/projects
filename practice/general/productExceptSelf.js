function solution(nums, m) {
    const n = nums.length;
    const f = new Array(n);
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        f[i] = prefix;
        prefix = (prefix * nums[i]) % m;
    }
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        f[i] = (f[i] * suffix) % m;
        suffix = (suffix * nums[i]) % m;
    }
    let g = 0;
    for (let i = 0; i < n; i++) {
        g = (g + f[i]) % m;
    }
    return g % m;
}

/*
function solution(nums, m) {
    let prod = 1;
    for (let i=0;i<nums.length;i++) {
        prod = prod*nums[i]%m;
    } 
    let sum = 0;
    for (let i=0;i<nums.length;i++) {
        sum += prod/(nums[i]%m);
        console.log(prod,prod/(nums[i]%m),sum);
    }
    return sum%m;
}
/*
function solution(nums, m) {
    let sum = 0;
    for (let i=0;i<nums.length;i++) {
        let prod = 1;
        for (let j=0;j<nums.length;j++) {
            if (i!==j){
                prod = prod*nums[j]%m;
            }
        }
        sum += prod;
    }
    return sum%m;
}
*/