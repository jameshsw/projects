function solution(inputArray) {
    cur = inputArray[0];
    global = inputArray[0];
    for(let i=1;i<inputArray.length;i++) {
        cur = Math.max(cur+inputArray[i],inputArray[i]);
        if (cur > global) global = cur;
    }
    return global;
}
