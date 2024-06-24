// loop through arr
// comp 2 values
// swap if the left value (i) is less than the right value (i+1) -> swapped detected
// skip if the opposite^
// do these steps on the arr until no more swaps are made
const startArr = [4, 3, 6, 7, 5, 0, 9, 2, 1, 12, 33, 0];
let steps = [];
const bubbleSort = (array: number[]) => {
  let swapped = false;
  let sortArr = [...array];
  for (let i = 0; i < array.length; i++) {
    let leftNumber = sortArr[i];
    let rightNumber = sortArr[i + 1];
    // ex. [2,1]
    if (leftNumber > rightNumber) {
      // Swap vals
      sortArr[i] = rightNumber;
      sortArr[i + 1] = leftNumber;
      swapped = true;
      steps.push([...sortArr]);
    }
  }
  // steps.push([...sortArr]);

  if (swapped) {
    return bubbleSort(sortArr);
  }
  return { array: sortArr, steps: steps };
};
export default bubbleSort;
console.log(bubbleSort(startArr));
