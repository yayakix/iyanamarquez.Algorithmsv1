// The Selection Sort algorithm finds the lowest value in an array and moves it to the front of the array.

let steps: { array: number[]; indices: number[] }[] = [];
const selectionSort = (unsortedArr: number[], offset: number = 0) => {
  if (!Array.isArray(unsortedArr)) {
    throw new Error("Input is not an array");
  }
  if (offset === 0) {
    steps = []; // Initialize steps for each call
  }

  let array = [...unsortedArr];
  let lowestValIdx = offset;

  for (let j = offset + 1; j < array.length; j++) {
    // Track the indices being compared
    steps.push({ array: [...array], indices: [lowestValIdx, j] });

    if (array[lowestValIdx] > array[j]) {
      lowestValIdx = j;
    }
  }

  // Push the state before the swap
  steps.push({ array: [...array], indices: [lowestValIdx, offset] });

  [array[lowestValIdx], array[offset]] = [array[offset], array[lowestValIdx]];

  // Push the state after the swap
  steps.push({ array: [...array], indices: [lowestValIdx, offset] });

  if (offset === array.length - 1) {
    return { array: array, steps: steps };
  } else {
    return selectionSort(array, offset + 1);
  }
};
const startingArr = [2, 9, 5, 4, 3, 7, 6, 1, 8, 0];

console.log(selectionSort(startingArr));

export default selectionSort;
