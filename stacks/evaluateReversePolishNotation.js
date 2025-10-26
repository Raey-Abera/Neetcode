/* Evaluate Reverse Polish Notation
You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation.

Return the integer that represents the evaluation of the expression.

The operands may be integers or the results of other operations.
The operators include '+', '-', '*', and '/'.
Assume that division between integers always truncates toward zero.
Example 1:

Input: tokens = ["1","2","+","3","*","4","-"]
Output: 5

Explanation: ((1 + 2) * 3) - 4 = 5
Constraints:
1 <= tokens.length <= 1000.
tokens[i] is "+", "-", "*", or "/", or a string representing an integer in the range [-100, 100].*/

//Stack solution 
const evalRPN = (tokens) => {
    const stack = [];
    
    for (const char of tokens) {
        if (char === '+') {
            stack.push(stack.pop() + stack.pop());
        } else if (char === '-') {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(a - b);
        } else if (char === '*') {
            stack.push(stack.pop() * stack.pop());
        } else if (char === '/') {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(Math.trunc(a / b));
        } else {
            stack.push(parseInt(char));
        }
    }
    
    return stack.pop();
};

//Example usage:
console.log(evalRPN(["1","2","+","3","*","4","-"])); // Output: 5

//Time Complexity: O(n)
