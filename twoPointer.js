const twoSum = (numbers, target) => {
  left = 0;
  right = numbers.length - 1;
  sum = 0;

  while(left< right) {
    sum = numbers[left] + numbers[right];
    if (sum === target) {
      //index-1 based
      return [left + 1, right + 1];
    } else if (sum < target) {
      //need higher sum
      left++;
    } else {
      right--;
    }
  }
};

console.log(twoSum([2, 3, 4, 5, 6, 7], 7));
