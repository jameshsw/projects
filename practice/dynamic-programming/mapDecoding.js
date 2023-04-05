/*
function solution(message) {
    if (message[0] === '0') return 0;
    if (message.length === 0) return 1;
    let dp = [];
    dp[0] = 1;
    dp[1] = 1; 
    let mod = 1e9+7;
    for (let i=2;i<=message.length;i++) {
        dp[i] = 0;
        if (message[i-1]>='1' && message[i-1] <= '9') dp[i] += dp[i-1]%mod;
        if (message[i-2]=='1') dp[i] += dp[i-2]%mod;
        else if (message[i-2]=='2' && (message[i-1]>='0'&&message[i-1]<='6')) dp[i]+=dp[i-2]%mod;
    }
    return dp[message.length];
}
*/
function solution(message) {
    let dp = [];
    dp[0] = 1;
    dp[1] = message.charAt(0) === '0'? 0:1;
    let mod = 1e9+7;
    for (let i=2;i<=message.length;i++) {
        dp[i] = 0;
        let oneD= parseInt(message.substring(i-1,i)); 
        let twoD= parseInt(message.substring(i-2,i)); 
        if (oneD >= 1) dp[i] = dp[i]+dp[i-1]%mod; // 1 digit 1-9
        if (twoD >= 10 && twoD <= 26) dp[i] = dp[i]+dp[i-2]%mod; // 2 digits 10-26
    }
    return dp[message.length];
}
