function solution(a) {
    let s = new Set();
    for (let i=0;i<a.length;i++) {
        if (s.has(a[i])) return true;
        s.add(a[i]);
    }
    return false;
}
