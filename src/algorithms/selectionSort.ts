// const startArr = [1, 9, 5, 3, 2, 7, 6, 8, 4];

// const startArr = [9, 5, 3, 11, 20, 7, 6, 8, 4, 1];
// const selectionSort = (startArr: []) => {
//   let array = [...startArr];
//   let newArr = [];
//   while (array.length) {
//     let lowestVal = array[0];
//     let lowestIdx = 0;
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] < lowestVal) {
//         lowestVal = array[i];
//         lowestIdx = i;
//       }
//     }
//     newArr.push(array.splice(lowestIdx, 1)[0]);
//     console.log([newArr] + [array]);

//     // return array;
//   }
//   return newArr + array;
// };

// console.log(selectionSort(startArr));

// const startArr = [1, 9, 5, 3, 2, 7, 6, 8, 4];

const selectionSort = (startArr: []) => {
  let array = [...startArr];
  let lowestVal = array[0];
  let lowestIdx = 0;
  for (let i = 0; i < array.length + 1; i++) {
    if (array[i] < lowestVal) {
      lowestVal = array[i];
      lowestIdx = i;
    }
  }
  let num = array.splice(lowestIdx, 1)[0];

  return { newNum: num, array: array };
};

export default selectionSort;
