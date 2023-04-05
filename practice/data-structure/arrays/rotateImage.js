function solution(a) {
    let res = [];
    for (let r=0;r<a.length;r++) {
        res[r] = [];
        for (let c=0;c<a[0].length;c++) {
            res[r].push(a[a.length-c-1][r]);
        }
    }
    return res;
}
