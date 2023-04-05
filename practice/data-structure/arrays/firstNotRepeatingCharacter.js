function solution(s) {
    let m = new Map();
    for (let i=0;i<s.length;i++) {
        if (m.has(s[i])) {
            m.set(s[i],m.get(s[i])+1);
        } else {
            m.set(s[i],1);            
        }
    }
    let found = '_'
    m.forEach((v,k)=>{
        console.log(k,v, found);
        if (v===1){
            if (found === '_')
                found = k;
        } 
    });
    return found;
}
