// loop through arr
// comp 2 values
// swap if the left value (i) is less than the right value (i+1) -> swapped detected
// skip if the opposite^
// do these steps on the arr until no more swaps are made
const bubbleSort = (array: number[]) => {
  let steps: number[][] = [];
  let sortArr = [...array];
  let n = sortArr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      let leftNumber = sortArr[i];
      let rightNumber = sortArr[i + 1];
      if (leftNumber > rightNumber) {
        // Swap vals
        sortArr[i] = rightNumber;
        sortArr[i + 1] = leftNumber;
        swapped = true;
        steps.push([...sortArr]);
      }
    }
    n--; // Reduce the range of the inner loop
  } while (swapped);
  return { array: sortArr, steps: steps };
};

// console.log(bubbleSort([2, 8, 5, 4, 3, 6, 7, 1]));

export default bubbleSort;
