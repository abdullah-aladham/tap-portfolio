function IndexSearch(nums, target) {
  let i = 0;
  while (nums.length != null) {
    if (target === nums[i] + nums[i + 1]) {
      return "first index = " + i + " ," + "Second index = " + (i + 1);
    } else if (nums[i] + nums[i + 1] != target) {
      i++;
    } else {
      break;
    }
  } //end of while loop
  return -1; //indicates that the target indicies are not found
}
console.log(IndexSearch([1, 2, 3, 4], 5)); //first index 1, second index 2
console.log(IndexSearch([1, 2, 3, 4], 7)); // first index 2 , second index 3
