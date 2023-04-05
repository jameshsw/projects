const { setupMaster } = require("cluster");
const { sum } = require("lodash");

function solution(coins, quantity) {
    let sums = new Set();
    for (let i=0;i<coins.length;i++) {     
        let sums1 = [...sums];
        for (let j=1;j<=quantity[i];j++) {
            let sum = coins[i]*j
            sums.add(sum);
            sums1.forEach((v)=>{
                sums.add(v+sum);
            });
        }        
    }
    return sums.size;
}
