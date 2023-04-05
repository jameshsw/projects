function solution(dishes) {
    let map = new Map();
    for (let i=0;i<dishes.length;i++) {
        for (let j=1;j<dishes[i].length;j++) {
            if (map.has(dishes[i][j])) {
                map.set(dishes[i][j],[...map.get(dishes[i][j]),dishes[i][0]]);                
            } else {
                map.set(dishes[i][j],[dishes[i][0]]);
            }
        }
    }
    const sortedKeys = Array.from(map.keys()).sort();
    let res = [];
    let i = 0;
    sortedKeys.forEach(key => {
        if (map.get(key).length > 1) {
            res[i] = [key];
            res[i] = [...res[i],...Array.from(map.get(key)).sort()];
            i++;
        }
    });
    return res;
}
