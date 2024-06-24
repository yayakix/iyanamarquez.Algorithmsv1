// loop through arr
// comp 2 values
// swap if the left value (i) is less than the right value (i+1) -> swapped detected
// skip if the opposite^
// do these steps on the arr until no more swaps are made
const bubbleSort = (array: number[]) => {
  let swapped = false;
  let sortArr = [...array];
  for (let i = 0; i < array.length - 1; i++) {
    let leftNumber = sortArr[i];
    let rightNumber = sortArr[i + 1];
    // ex. [2,1]
    if (leftNumber > rightNumber) {
      // Swap vals
      sortArr[i] = rightNumber;
      sortArr[i + 1] = leftNumber;
      swapped = true;
    }
  }
  return { array: sortArr, swapped: swapped };
};

export default bubbleSort;
