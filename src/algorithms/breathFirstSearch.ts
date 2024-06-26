const graph = {
  A: ["B", "D"],
  B: ["A", "C", "E"],
  C: ["B"],
  D: ["A", "E"],
  E: ["B", "D", "F"],
  F: ["E"],
};

const bfs = (graph, start) => {
  let visited = [];
  let stack = [start];
  while (stack.length) {
    const vertex = stack.shift();

    if (!visited.includes(vertex)) {
      visited.push(vertex);
      for (const x of graph[vertex]) {
        stack.push(x);
      }
    }
  }
  return visited;
};

console.log(bfs(graph, "A"));
