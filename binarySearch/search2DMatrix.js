/*Search a 2D Matrix
You are given an m x n 2-D integer array matrix and an integer target.

Each row in matrix is sorted in non-decreasing order.
The first integer of every row is greater than the last integer of the previous row.
Return true if target exists within matrix or false otherwise.

Can you write a solution that runs in O(log(m * n)) time?

Example 1:
Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 10
Output: true

Example 2:
Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 15
Output: false

Constraints:
m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-10000 <= matrix[i][j], target <= 10000*/   

const searchMatrix = (matrix, target) => {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }

    let rows = matrix.length;
    let cols = matrix[0].length;
    let left = 0;
    let right = rows * cols - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        let midValue = matrix[Math.floor(mid / cols)][mid % cols];

        if (midValue === target) {
            return true;
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
};

// Example usage:
const matrix1 = [[1,2,4,8],[10,11,12,13],[14,20,30,40]];
const target1 = 10;
console.log(searchMatrix(matrix1, target1)); // Output: true

const matrix2 = [[1,2,4,8],[10,11,12,13],[14,20,30,40]];
const target2 = 15;
console.log(searchMatrix(matrix2, target2)); // Output: false                                                                                  
//Time Complexity: O(log(m * n)), where m is the number of rows and n is the number of columns in the matrix.
//Space Complexity: O(1) since we are using only a constant amount of extra space.  