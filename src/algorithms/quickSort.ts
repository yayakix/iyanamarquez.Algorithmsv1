// const quicksort = (array: number[]): number => {
//   let arr: number[] = [...array];
//   if (arr.length < 2) {
//     return arr[0];
//   }
//   let medianIdx = Math.floor(array.length / 2);
//   [arr[medianIdx], arr[arr.length - 1]] = [arr[arr.length - 1], arr[medianIdx]];
//   let FRidx = arr.length - 2;
//   let FLidx = 0;
//   let pivot = arr[arr.length - 1];

//   while (FLidx <= FRidx) {
//     // IF left side is < pivot, continue left side ->
//     if (arr[FLidx] < pivot) {
//       FLidx++;
//     }
//     // if left side is greater, move right side until there is a smaller number <--
//     else {
//       if (arr[FRidx] < pivot) {
//         [arr[FLidx], arr[FRidx]] = [arr[FRidx], arr[FLidx]];
//         FLidx++;
//         // do a swap
//         // start from left side again fr ++
//       } else {
//         FRidx--;
//       }
//     }
//   }
//   //   swap pivot and fl
//   [arr[FLidx], arr[arr.length - 1]] = [arr[arr.length - 1], arr[FLidx]];

//   // Recursively sort the left and right partitions
//   let leftPart = quicksort(arr.slice(0, FLidx));
//   let rightPart = quicksort(arr.slice(FLidx + 1));

//   return [...leftPart, arr[FLidx], ...rightPart];
// };

// let testArr = [9, 8, 7, 6, 5, 4, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 3, 2, 1, 0];

// console.log(quicksort(testArr));
