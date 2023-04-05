function solution(g, s) {
    let dis = new Array(g.length).fill(Infinity);
    let pq = [];
    pq.push([s,0]);
    dis[s] = 0;
    while (pq.length != 0) {
      [i, d] = pq.sort((a, b) => b[1] - a[1]).pop(); // take the shortest distance
      for(let j=0;j<g[i].length;j++){ // j = destination index
        if(g[i][j]>-1) { // if there is a connection, > -1
          let nd = dis[i]+g[i][j];
          if (nd<dis[j]) {
            dis[j] = nd;  
            pq.push([j,dis[j]]);
          }
        }
      }
    }
    return dis;
  }
  
  /*
  function solution(g, s) {
    let pq = [];
    pq.push([s,0]);
    let dis = new Map();
    dis.set(s,0);
    while (pq.length != 0) {
      [i, d] = pq.sort((a, b) => b[1] - a[1]).pop(); // take the shortest distance
      for(let j=0;j<g[i].length;j++){ // j = destination index
        if(g[i][j]>-1) { // if there is a connection, > -1
          let nd = dis.get(i)+g[i][j];
          console.log(i,j,nd,dis.get(i),g[i][j],pq);
          if (!dis.has(j) || nd<dis.get(j)) {
            dis.set(j,nd);  
            pq.push([j,dis.get(j)]);
          }
        }
      }
    }
    Array.from(dis).sort(([key1], [key2]) => key1.localeCompare(key2))
    return Array.from(dis.values());
  }
  
  /*
  function solution(g, s) {
    const n = g.length;
    const dist = new Array(n).fill(Infinity);
    const visited = new Array(n).fill(false);
    dist[s] = 0;
  
    for (let i = 0; i < n - 1; i++) {
      let u = -1;
      for (let j = 0; j < n; j++) {
        if (!visited[j] && (u === -1 || dist[j] < dist[u])) {
          u = j;
        }
      }
      visited[u] = true;
      for (let v = 0; v < n; v++) {
        if (g[u][v] !== -1 && dist[u] + g[u][v] < dist[v]) {
          dist[v] = dist[u] + g[u][v];
        }
      }
    }
  
    return dist;
  }
  */