/*Valid Parentheses
You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

The input string s is valid if and only if:
Every open bracket is closed by the same type of close bracket.
Open brackets are closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
Return true if s is a valid string, and false otherwise.

Example 1:
Input: s = "[]"

Output: true
Example 2:
Input: s = "([{}])"

Output: true
Example 3:
Input: s = "[(])"

Output: false
Explanation: The brackets are not closed in the correct order.
Constraints:
1 <= s.length <= 1000*/

//Use stack to keep track of opening brackets   
const isValid = (s) => {
    const stack = [];   
    const bracketMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    for (let char of s) {
        if (bracketMap[char]) {
            stack.push(char);
        } else {
            const lastOpen = stack.pop();
            if (bracketMap[lastOpen] !== char) {
                return false;
            }
        }
    }
    
    return stack.length === 0;                  
}

console.log(isValid("[]")); // Output: true
console.log(isValid("([{}])")); // Output: true
console.log(isValid("[(])")); // Output: false
// Time Complexity: O(n)
