function solution(s, t) {
    const chars = t.split('');    
    for (let i = t.length;i <= s.length;i++) {
        for (let j = 0; j < s.length-i+1;j++) {
            const sub = s.slice(j,j+i);
            if (chars.every(c => sub.indexOf(c) !== -1)) {
                return sub;
            }
        }
    }
}
