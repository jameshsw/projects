function solution(level, pos) {
    if (pos === 1) return 'Engineer';
    if (solution(level-1,Math.floor((pos+1)/2))==='Engineer') {
        if (pos%2===1) return 'Engineer';
        else return 'Doctor';
    } else {
        if (pos%2===1) return 'Doctor';
        else return 'Engineer';        
    }
}