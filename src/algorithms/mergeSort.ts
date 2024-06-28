// /* // Merge sort continuously cuts down a list into multiple sublists until each has only one item,
// then merges those sublists into a sorted list. */

// let testArr = [5, 4, 7, 3, 1, 6, 8, 2, 9];
// function mergeWithSteps(array: number[]) {
//   let arr: number[] = [...array];
//   let steps = { sortedArrSteps: [], leftSide: [], rightSide: [] };

//   function mergeSort(arr: number[]): number[] {
//     if (arr.length < 2) {
//       return arr;
//     }
//     // take in arr
//     // check if arr length is < 2, return arr if just 1 item
//     let half_length = Math.floor(arr.length / 2);
//     let leftArr = arr.slice(0, half_length);
//     let rightArr = arr.slice(half_length);
//     // find the midpoint
//     // left arr is left side, right arr is right arr (slice)
//     return mergeSortedArr(mergeSort(leftArr), mergeSort(rightArr));
//     // merge(merge sort on both arrs again)
//     // return the merge of those
//   }

//   function mergeSortedArr(leftArr: number[], rightArr: number[]) {
//     let sortArr = [];
//     // [4] - [5] -> [4,5] - [3,7] -> [3,4,5,7]
//     // set empty sorted arr []
//     steps.leftSide.push([...leftArr]);
//     steps.rightSide.push([...rightArr]);
//     while (leftArr.length > 0 && rightArr.length > 0) {
//       if (leftArr[0] < rightArr[0]) {
//         sortArr.push(leftArr.shift());
//       } else {
//         sortArr.push(rightArr.shift());
//       }
//     }

//     steps.sortedArrSteps.push([...sortArr]);

//     return [...sortArr, ...leftArr, ...rightArr];
//     // while the arrs have a length
//     // compare left arr el to right arr element
//     // join sorted arr with remanining elements of left and right arrs
//   }
//   //   console.log(mergeSort(arr));

//   return { sortedArr: mergeSort(arr), steps: steps };
// }
// export default mergeWithSteps;
// console.log(mergeWithSteps(testArr));
