/* Longest Repeating Character Replacement
You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.
After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

Example 1:
Input: s = "XYYX", k = 2
Output: 4
Explanation: Either replace the 'X's with 'Y's, or replace the 'Y's with 'X's.

Example 2:
Input: s = "AAABABB", k = 1
Output: 5
Explanation: Replace the one 'B' in the middle with 'A' and form "AAAAABB" or replace the last 'B' to get "AAABAAA".

Constraints:
1 <= s.length <= 1000
0 <= k <= s.length */

const characterReplacement = (s, k) => {
        let count = new Map();
        let result = 0;

        let left = 0,
            maxFreq = 0;
        for (let right = 0; right < s.length; right++) {
            count.set(s[right], (count.get(s[right]) || 0) + 1);
            maxFreq = Math.max(maxFreq, count.get(s[right]));

            while (right - left + 1 - maxFreq > k) {
                count.set(s[left], count.get(s[left]) - 1);
                left++;
            }
            result = Math.max(result, right - left + 1);
        }

        return result;
}
// Time Complexity: O(n)
// Space Complexity: O(1) 

// Alternative solution using array instead of Map

// const characterReplacement = (s, k) => {
//     let left = 0;
//     let right = 0;
//     let maxCount = 0;
//     let count = {};
//     let result = 0;

//     while (right < s.length) {
//         count[s[right]] = (count[s[right]] || 0) + 1;
//         maxCount = Math.max(maxCount, count[s[right]]);

//         while ((right - left + 1) - maxCount > k) { // Window size - maxCount > k
//             count[s[left]]--;
//             left++;
//         }
//         result = Math.max(result, right - left + 1);
//         right++;
//     }
//     return result;
// }

console.log(characterReplacement("XYYX", 2)); // Output: 4
console.log(characterReplacement("AAABABB", 1)); // Output: 5
