function solution(a, b, v) {
    let s = new Set(b);
    for (let i=0;i<a.length;i++) {
        if (s.has(v-a[i])) return true;
    }
    return false;
}
