// // 1
// // Divide: Divide the list or array recursively into two halves until it can no more be divided.
// // Insight: a single item array is sorted [1]

// // 2
// // Conquer: Each subarray is sorted individually using the merge sort algorithm.
// //

// // 3
// // Merge: The sorted subarrays are merged back together in sorted order.
// // The process continues until all elements from both subarrays have been merged.
// //

// // merge
// // merge two sorted arrays into one sorted array

// // merge sort
// // merge sort is going to split the array into two halves and pipe that unsorted array into two sorting functions
// // merge two sorted arrays into one sorted array

// // input -> two sorted arrays
// // output -> one sorted array
// const merge = (left: number[], right: number[]): number[] => {
//   const newLeft = [...left];
//   const newRight = [...right];
//   const sorted: number[] = [];

//   while (newLeft.length && newRight.length) {
//     if (newLeft[0] < newRight[0]) {
//       const firstLeft = newLeft.shift()!;
//       sorted.push(firstLeft);
//     } else {
//       const firstRight = newRight.shift()!;
//       sorted.push(firstRight);
//     }
//   }

//   return [...sorted, ...newLeft, ...newRight];
// };

// // graph - node = node
// // tree - parent node -> children nodes

// // node: { sortedArray: number[], unsortedArray: number[], leftChild?: node, rightChild?: node }

// export type Node = {
//   sortedArray: number[]; // before
//   unsortedArray: number[]; // after
//   leftChild?: Node;
//   rightChild?: Node;
// };

// type WrappedMergeSortReturn = {
//   sortedArray: number[];
//   metadata: {
//     node: Node; // top of the tree
//   };
// };

// type MergeSortReturn = {
//   sortedArray: number[];
//   thisNode: Node;
// };

// export const wrappedMergeSort = (arr: number[]): WrappedMergeSortReturn => {
//   const mergeSort = (arr: number[]): MergeSortReturn => {
//     // reassign sortedArray once sorted
//     // add left child and a right child
//     let thisNode: Node = {
//       sortedArray: arr,
//       unsortedArray: arr,
//     };

//     if (arr.length === 1) {
//       return { sortedArray: arr, thisNode };
//     }

//     // split it into two items and feed those to merge
//     const middle = Math.floor(arr.length / 2);
//     const left = arr.slice(0, middle);
//     const right = arr.slice(middle, arr.length);

//     const sortedLeft = mergeSort(left);
//     const sortedRight = mergeSort(right);
//     const sortedArray = merge(sortedLeft.sortedArray, sortedRight.sortedArray);

//     thisNode = {
//       ...thisNode,
//       leftChild: sortedLeft.thisNode,
//       rightChild: sortedRight.thisNode,
//       sortedArray,
//     };

//     console.log("mergeSort sorted", sortedLeft, sortedRight);
//     return {
//       sortedArray,
//       thisNode,
//     };
//   };

//   const node = mergeSort(arr);

//   return {
//     sortedArray: node.sortedArray,
//     metadata: {
//       node: node.thisNode,
//     },
//   };
// };
// console.log(
//   JSON.stringify(
//     wrappedMergeSort([3, 2, 1, 100, 212, 50, 23, 42, 78, 99, 45, 24]),
//     null,
//     2
//   )
// );
