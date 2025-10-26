/*Search in Rotated Sorted Array
You are given an array of length n which was originally sorted in ascending order. It has now been rotated between 1 and n times. For example, the array nums = [1,2,3,4,5,6] might become:

[3,4,5,6,1,2] if it was rotated 4 times.
[1,2,3,4,5,6] if it was rotated 6 times.
Given the rotated sorted array nums and an integer target, return the index of target within nums, or -1 if it is not present.

You may assume all elements in the sorted rotated array nums are unique,

A solution that runs in O(n) time is trivial, can you write an algorithm that runs in O(log n) time?

Example 1:

Input: nums = [3,4,5,6,1,2], target = 1

Output: 4
Example 2:

Input: nums = [3,5,6,0,1,2], target = 4

Output: -1
Constraints:

1 <= nums.length <= 1000
-1000 <= nums[i] <= 1000
-1000 <= target <= 1000
All values of nums are unique.
nums is an ascending array that is possibly rotate*/

const searchInRotatedSortedArr = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        // Determine which side is properly sorted
        if (nums[left] <= nums[mid]) {
            // Left side is sorted
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1; // Target is in the left side
            } else {
                left = mid + 1; // Target is in the right side
            }
        } else {
            // Right side is sorted
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1; // Target is in the right side
            } else {
                right = mid - 1; // Target is in the left side
            }
        }
    }

    return -1; // Target not found
};

// Example usage:
// const nums = [3,4,5,6,1,2];
// const target = 1;
// console.log(searchInRotatedSortedArr(nums, target)); // Output: 4

module.exports = searchInRotatedSortedArr;              

// Time Complexity: O(log n)
// Space Complexity: O(1)