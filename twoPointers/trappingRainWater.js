/*Trapping Rain Water
You are given an array of non-negative integers height which represent an elevation map. Each value height[i] represents the height of a bar, which has a width of 1.

Return the maximum area of water that can be trapped between the bars.

Example 1:
Input: height = [0,2,0,3,1,0,1,3,2,1]
Output: 9

Constraints:
1 <= height.length <= 1000
0 <= height[i] <= 1000 */

// Optimized solution
const trapOptimized = (height) => {
    if (!height || height.length === 0) {
        return 0;
    }

    let left = 0;
    let right = height.length - 1;
    let leftMax = height[left];
    let rightMax = height[right];
    let result = 0;
    while (left < right) {
        if (leftMax < rightMax) {
            left++;
            leftMax = Math.max(leftMax, height[left]);
            result += leftMax - height[left];
        } else {
            right--;
            rightMax = Math.max(rightMax, height[right]);
            result += rightMax - height[right];
        }
    }
    return result;
}

console.log(trapOptimized([0,2,0,3,1,0,1,3,2,1])); // Output: 9

// Time Complexity: O(n)
// Space Complexity: O(1)

//First Solution
/*const trap = (height) => {
        let left = 0;
        let right = height.length - 1;
        let leftMax = 0;
        let rightMax = 0;
        let result = 0;
    
        while (left < right) {
            if (height[left] < height[right]) {
                if (height[left] >= leftMax) {
                    leftMax = height[left];
                } else {
                    result += leftMax - height[left];
                }
                left++;
            } else {
                if (height[right] >= rightMax) {
                    rightMax = height[right];
                } else {
                    result += rightMax - height[right];
                }
                right--;
            }
        }          
        return result;
    }

console.log(trap([0,2,0,3,1,0,1,3,2,1])); // Output: 9
