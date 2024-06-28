// const startGraph = {
//   A: ["B", "D"],
//   B: ["A", "C", "E"],
//   C: ["B"],
//   D: ["A", "E"],
//   E: ["B", "D", "F"],
//   F: ["E"],
// };

// const bfs = (
//   graph: {
//     [x: string]: any;
//     A?: string[];
//     B?: string[];
//     C?: string[];
//     D?: string[];
//     E?: string[];
//     F?: string[];
//   },
//   start: string
// ) => {
//   let visited: any[] = [];
//   let stack = [start];
//   while (stack.length) {
//     const vertex = stack.shift();

//     if (!visited.includes(vertex)) {
//       visited.push(vertex);
//       for (const x of graph[vertex]) {
//         stack.push(x);
//       }
//     }
//   }
//   return visited;
// };

// console.log(bfs(startGraph, "A"));
