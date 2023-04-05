function solution(nums) {
    if (nums.length===0) return [];
    if (nums.length===1) return [''+nums[0]];
    let res = [];
    let head = nums[0];
    for (let i=1;i<nums.length;i++){
        if (nums[i] - nums[i-1] > 1) { // when the next number is out of range, i - (i-1) > 1
            if (head===nums[i-1])
                res.push(''+head);
            else              
               res.push(head+'->'+nums[i-1]);
            head = nums[i];
        }
        if (i===nums.length-1) { // last number
            if (head === nums[i])
                res.push(''+head);
            else
                res.push(head+'->'+nums[i]);  
        }
    }
    return res;
}
