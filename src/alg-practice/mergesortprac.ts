import { metadata } from "@/app/layout";

function merge(left, right) {
  let newLeft = [...left];
  let newRight = [...right];

  let arr = [];
  while (newLeft.length && newRight.length) {
    if (newLeft[0] < newRight[0]) {
      arr.push(newLeft[0]);
      newLeft.shift();
    } else {
      arr.push(newRight[0]);
      newRight.shift();
    }
  }
  return [...arr, ...newLeft, ...newRight];
}

function wrappedMergeSort(arr) {
  function mergeSortAgain(arr) {
    let thisNode = {
      sortedArray: arr,
      unsortedArray: arr,
    };

    let array = [...arr];
    if (array.length < 2) {
      // [1]
      return { sortedArray: arr, thisNode };
    }
    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);

    let sortedLeft = mergeSortAgain(left);
    let sortedRight = mergeSortAgain(right);
    let sorted = merge(sortedLeft.sortedArray, sortedRight.sortedArray);

    thisNode = {
      ...thisNode,
      leftChild: sortedLeft.thisNode,
      rightChild: sortedRight.thisNode,
      sorted,
    };

    return { sortedArray: sorted, thisNode };
  }

  const node = mergeSortAgain(arr);
  return {
    sortedArray: node.sortedArray,
    metadata: {
      node: node.thisNode,
    },
  };
}
console.log(
  JSON.stringify(
    wrappedMergeSort([3, 2, 1, 100, 212, 50, 23, 42, 78, 99, 45, 24])
  )
);
export default wrappedMergeSort;

/*
{
  "sortedArray": [1, 2, 3, 23, 24, 42, 45, 50, 78, 99, 100, 212],
  "metadata": {
    "node": {
      "sortedArray": [3, 2, 1, 100, 212, 50, 23, 42, 78, 99, 45, 24],
      "unsortedArray": [3, 2, 1, 100, 212, 50, 23, 42, 78, 99, 45, 24],
      "leftChild": {
        "sortedArray": [3, 2, 1, 100, 212, 50],
        "unsortedArray": [3, 2, 1, 100, 212, 50],
        "leftChild": {
          "sortedArray": [3, 2, 1],
          "unsortedArray": [3, 2, 1],
          "leftChild": {
            "sortedArray": [3],
            "unsortedArray": [3]
          },
          "rightChild": {
            "sortedArray": [2, 1],
            "unsortedArray": [2, 1],
            "leftChild": {
              "sortedArray": [2],
              "unsortedArray": [2]
            },
            "rightChild": {
              "sortedArray": [1],
              "unsortedArray": [1]
            },
            "sorted": [1, 2]
          },
          "sorted": [1, 2, 3]
        },
        "rightChild": {
          "sortedArray": [100, 212, 50],
          "unsortedArray": [100, 212, 50],
          "leftChild": {
            "sortedArray": [100],
            "unsortedArray": [100]
          },
          "rightChild": {
            "sortedArray": [212, 50],
            "unsortedArray": [212, 50],
            "leftChild": {
              "sortedArray": [212],
              "unsortedArray": [212]
            },
            "rightChild": {
              "sortedArray": [50],
              "unsortedArray": [50]
            },
            "sorted": [50, 212]
          },
          "sorted": [50, 100, 212]
        },
        "sorted": [1, 2, 3, 50, 100, 212]
      },
      "rightChild": {
        "sortedArray": [23, 42, 78, 99, 45, 24],
        "unsortedArray": [23, 42, 78, 99, 45, 24],
        "leftChild": {
          "sortedArray": [23, 42, 78],
          "unsortedArray": [23, 42, 78],
          "leftChild": {
            "sortedArray": [23],
            "unsortedArray": [23]
          },
          "rightChild": {
            "sortedArray": [42, 78],
            "unsortedArray": [42, 78],
            "leftChild": {
              "sortedArray": [42],
              "unsortedArray": [42]
            },
            "rightChild": {
              "sortedArray": [78],
              "unsortedArray": [78]
            },
            "sorted": [42, 78]
          },
          "sorted": [23, 42, 78]
        },
        "rightChild": {
          "sortedArray": [99, 45, 24],
          "unsortedArray": [99, 45, 24],
          "leftChild": {
            "sortedArray": [99],
            "unsortedArray": [99]
          },
          "rightChild": {
            "sortedArray": [45, 24],
            "unsortedArray": [45, 24],
            "leftChild": {
              "sortedArray": [45],
              "unsortedArray": [45]
            },
            "rightChild": {
              "sortedArray": [24],
              "unsortedArray": [24]
            },
            "sorted": [24, 45]
          },
          "sorted": [24, 45, 99]
        },
        "sorted": [23, 24, 42, 45, 78, 99]
      },
      "sorted": [1, 2, 3, 23, 24, 42, 45, 50, 78, 99, 100, 212]
    },
    "sorted": [1, 2, 3, 23, 24, 42, 45, 50, 78, 99, 100, 212]
  },
  "sorted": [1, 2, 3, 23, 24, 42, 45, 50, 78, 99, 100, 212]
}
 */
