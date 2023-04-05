function solution(a) {
    let s = new Set();
    for (let i =0;i<a.length;i++){
        if (s.has(a[i])) {
            return a[i];
        } else {
            s.add(a[i]);
        }
    }
    return -1
}
