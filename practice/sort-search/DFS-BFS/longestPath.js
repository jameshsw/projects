function solution(fileSystem) {
    let max = 0;
    let paths = [];
    paths[0] = 0;
    fileSystem.split('\f').forEach(line=>{
        let name = line.replace(/(\t)+/,''); // remove '/t'
        let depth = line.length - name.length; // get depth
        console.log(line,depth);
        if (name.indexOf('.')>-1) {
            max = Math.max(max,paths[depth]+name.length);
        }else {
            paths[depth+1] = paths[depth]+name.length+1;
        }
    });
    return max;
}
