function solution(strings, patterns) {
    for (let i=0;i<strings.length-1;i++) {
        for (let j=i;j<strings.length;j++) {
            if (strings[i] === strings[j]) {
                if (patterns[i]!==patterns[j]) {
                    return false;
                }
            } else {
                if (patterns[i]===patterns[j]) {
                    return false;
                }                
            }
        }
    }
    return true;
}
