function solution(n) {
    if (n===1) return 1;
    let dp = [1,1,2];
    for (let i=3;i<=n;i++) {
        dp[i] = dp[i-1]+dp[i-2];
    }
    return dp[n];
}
/*
function solution(n) {
    let one = 1;
    let two = 1;
    for (let i =0;i<n-1;i++) {
        let temp = one;
        one = one + two;
        two = temp;
    }
    return one;
}
*/