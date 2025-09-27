/* Container With Most Water
You are given an integer array heights where heights[i] represents the height of the  
i-th bar.You may choose any two bars to form a container. Return the maximum amount of water a container can store.

Example 1:
Input: height = [1,7,2,5,4,7,3,6]
Output: 36

Example
Input: height = [2,2,2]
Output: 4

Constraints:
2 <= height.length <= 1000
0 <= height[i] <= 1000 */

const maxArea = (heights) => {
    let left = 0;
    let right = heights.length - 1;
    let result = 0;

    while (left < right) {
        const width = right - left;
        const currentHeight = Math.min(heights[left], heights[right]);
        const currentArea = width * currentHeight;
        result = Math.max(result, currentArea);

        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }          
    return result;
}

console.log(maxArea([1,7,2,5,4,7,3,6])); // Output: 36
console.log(maxArea([2,2,2])); // Output: 4     

// Time Complexity: O(n)
// Space Complexity: O(1)