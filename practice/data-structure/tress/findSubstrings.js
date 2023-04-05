function solution(words, parts) {
    if (words === null || parts === null) return null;
    let res = [];
    let set = new Set(parts);
    for (let i=0;i<words.length;i++) {
        let index = -1;
        let length = -1;
        res[i] = words[i];
        for (let j=0;j<parts.length;j++) {
            let cIndex = words[i].indexOf(parts[j]);
            if (cIndex >= 0) {
                if (index < 0) {
                    index = cIndex;
                    length = parts[j].length;                    
                } else if (parts[j].length > length) {
                    index = cIndex;
                    length = parts[j].length;
                } else if (parts[j].length === length && cIndex < index) {
                    index = cIndex;
                    length = parts[j].length;
                }
            }
        }
        if(index >=0) {
            res[i] = words[i].slice(0, index) + '[' + words[i].slice(index);
            res[i] = res[i].slice(0, index+length+1) + ']' + res[i].slice(index+length+1);
        }            
    }
    return res;
}

/*
function solution(words, parts){
    var set = new Set(parts),
        res = [],
        i, l, k, part, cur, longest;
    
    for(i = 0; i < words.length;i++){
        cur = res[i] = words[i];
        longest = 0;
        for(l = 5; l >= 0; l--) {
            for (k = 0; k + l <= cur.length; k++) {
                part = cur.slice(k, k + l);
                if (set.has(part) && part.length > longest) {
                    longest = part.length;
                    res[i] = cur.replace(part, '[' + part + ']'); 
                    break;
                }
            }

        }
    }
    return res;
}
*/
