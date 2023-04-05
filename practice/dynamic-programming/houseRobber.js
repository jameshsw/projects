function solution(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0],nums[1]);
    let one = nums[0];
    let two = Math.max(nums[0],nums[1])
    for (let i=2;i<nums.length;i++) {
        let temp = two;
        two = Math.max(one+nums[i],two);
        one = temp;
    }
    return two;
}
/*
function solution(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0],nums[1]);
    let dp = [nums[0], Math.max(nums[0],nums[1])];
    for (let i=2;i<nums.length;i++) {
        dp[i] = Math.max(dp[i-2]+nums[i],dp[i-1]);
    }
    return dp[nums.length-1];
}
*/