/* Binary Search
You are given an array of distinct integers nums, sorted in ascending order, and an integer target.

Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1.

Your solution must run in 
O(logn)
O(logn) time.

Example 1:
Input: nums = [-1,0,2,4,6,8], target = 4
Output: 3

Example 2:
Input: nums = [-1,0,2,4,6,8], target = 3
Output: -1

Constraints:
1 <= nums.length <= 10000.
-10000 < nums[i], target < 10000
All the integers in nums are unique.*/

const binarySearch = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

module.exports = binarySearch;      

// Example usage:
// console.log(binarySearch([-1,0,2,4,6,8], 4)); // Output: 3
// console.log(binarySearch([-1,0,2,4,6,8], 3)); // Output: -1      

// Time Complexity: O(log n)
// Space Complexity: O(1)