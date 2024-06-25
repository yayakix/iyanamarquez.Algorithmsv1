function binarySearch(nums, target) {
  let lowIdx = 0;
  let highIdx = nums.length;

  while (lowIdx <= highIdx) {
    let midpoint = Math.floor((highIdx + lowIdx) / 2);

    if (nums[midpoint] === target) {
      return midpoint;
    } else if (target > nums[midpoint]) {
      // check right side
      lowIdx = midpoint + 1;
    } else {
      // check left side?
      highIdx = midpoint - 1;
    }
  }
  return -1;
}
