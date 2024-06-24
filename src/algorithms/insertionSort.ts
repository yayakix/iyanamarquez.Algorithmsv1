const startArr = [1, 9, 5, 3, 2, 7, 6, 8, 4];

const insertionSort = (startArr: []) => {
  let array = [...startArr];
  let newArray: number[] = [];
  let continueVar = true;
  let steps = [];
  let steps2 = [];

  while (continueVar) {
    let lowestIdx = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] < array[lowestIdx]) {
        lowestIdx = i;
      }
    }
    newArray.push(array.splice(lowestIdx, 1)[0]);
    steps.push([...newArray]);
    steps2.push([...array]);

    if (!array.length) {
      continueVar = false;
    }
  }

  return { array: array, steps: steps, steps2: steps2 };
};

export default insertionSort;
console.log(insertionSort(startArr));
