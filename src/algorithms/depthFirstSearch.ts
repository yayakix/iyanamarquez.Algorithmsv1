const graph = {
  A: ["B", "D"],
  B: ["A", "C", "E"],
  C: ["B"],
  D: ["A", "E"],
  E: ["B", "D", "F"],
  F: ["E"],
};

const dfs = (graph, start) => {
  let visited = [];
  let stack = [start];
  while (stack.length) {
    const vertex = stack.pop();

    if (!visited.includes(vertex)) {
      visited.push(vertex);
      for (const x of graph[vertex]) {
        stack.push(x);
      }
    }
  }
  return visited;
};

console.log(dfs(graph, "A"));
