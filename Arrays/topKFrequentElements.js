/* Top K Frequent Elements
Given an integer array nums and an integer k, return the k most frequent elements within the array.

The test cases are generated such that the answer is always unique.
You may return the output in any order.

Example 1:
Input: nums = [1,2,2,3,3,3], k = 2
Output: [2,3]

Example 2:
Input: nums = [7,7], k = 1
Output: [7]

Constraints:
1 <= nums.length <= 10^4.
-1000 <= nums[i] <= 1000
1 <= k <= number of distinct elements in nums. */


topKFrequent(nums, k) {
// Step 1: Count the frequency of each number
const frequencyMap = new Map();
for (const num of nums) {
frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
}

// Step 2: Convert the map entries into an array of [number, frequency] pairs
const entries = Array.from(frequencyMap.entries());

// Step 3: Sort the entries by frequency in descending order
entries.sort((a, b) => b[1] - a[1]);

// Step 4: Extract the top k elements
const result = [];
for (let i = 0; i < k; i++) {
result.push(entries[i][0]);
}

return result;
}