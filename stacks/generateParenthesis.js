/* Generate Parentheses
You are given an integer n. Return all well-formed parentheses strings that you can generate with n pairs of parentheses.

Example 1:

Input: n = 1
Output: ["()"]

Example 2:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
You may return the answer in any order.

Constraints:
1 <= n <= 7 */

//Stack approach using backtracking         
const generateParenthesis = (n) => {
    const result = [];
    // Helper function for backtracking 
    const backtrack = (current, open, close) => {
        // If the current string is of the maximum length, add to result        
        if (current.length === n * 2) {
            result.push(current);
            return;
        }
        // If we can add an opening parenthesis, do so  
        if (open < n) {
            backtrack(current + '(', open + 1, close);
        }
        // If we can add a closing parenthesis, do so
        if (close < open) {
            backtrack(current + ')', open, close + 1);
        }
    };
    // Start backtracking process
    backtrack('', 0, 0);
    return result;
};

//Example usage:
console.log(generateParenthesis(3)); 
// Output: ["((()))","(()())","(())()","()(())","()()()"]

//Time Complexity: O(4^n / sqrt(n))
