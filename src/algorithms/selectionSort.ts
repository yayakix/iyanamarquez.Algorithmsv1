// // The Selection Sort algorithm finds the lowest value in an array and moves it to the front of the array.
let steps = [];
const selectionSort = (unsortedArr: number[], offset: number) => {
  let array = [...unsortedArr];
  // loop through arr
  let lowestValIdx = offset;
  for (let j = offset + 1; j < array.length; j++) {
    if (array[lowestValIdx] > array[j]) {
      lowestValIdx = j;
    }
  }
  [array[lowestValIdx], array[offset]] = [array[offset], array[lowestValIdx]];
  steps.push([...array]);
  if (offset === array.length - 2) {
    return { array: array, steps: steps };
  } else {
    return selectionSort(array, offset + 1);
  }
};

export default selectionSort;
