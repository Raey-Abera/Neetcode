/* Longest Substring Without Repeating Characters
Given a string s, find the length of the longest substring without duplicate characters.
A substring is a contiguous sequence of characters within a string.

Example 1:
Input: s = "zxyzxyz"
Output: 3
Explanation: The string "xyz" is the longest without duplicate characters.

Example 2:
Input: s = "xxxx"
Output: 1

Constraints:
0 <= s.length <= 1000
s may consist of printable ASCII characters */

const lengthOfLongestSubstring = (s) => {
    let container = new Map();
        let left = 0,
            result = 0;

        for (let right = 0; right < s.length; right++) {
            if (container.has(s[right])) {
                left = Math.max(container.get(s[right]) + 1, left);
            }
            container.set(s[right], right);
            result = Math.max(result, right - left + 1);
        }
        return result;
}

//Time Complexity: O(n)
//Space Complexity: O(min(m, n)) where m is the size of the character set and n is the length of the string

// Alternative solution using Set

// const lengthOfLongestSubstring = (s) => {
//     let left = 0;
//     let right = 0;
//     let maxLength = 0;
//     const charSet = new Set();

//     while (right < s.length) {
//         if (!charSet.has(s[right])) {
//             charSet.add(s[right]);
//             right++;
//             maxLength = Math.max(maxLength, charSet.size);
//         } else {
//             charSet.delete(s[left]);
//             left++;
//         }
//     }
//     return maxLength;
// }

console.log(lengthOfLongestSubstring("zxyzxyz")); // Output: 3
console.log(lengthOfLongestSubstring("xxxx")); // Output: 1

// Time Complexity: O(n)
// Space Complexity: O(min(m, n)) where m is the size of the character set and n is the length of the string