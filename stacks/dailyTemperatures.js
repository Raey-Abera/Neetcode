/*Daily Temperatures
You are given an array of integers temperatures where temperatures[i] represents the daily temperatures on the ith day.

Return an array result where result[i] is the number of days after the ith day before a warmer temperature appears on a future day. If there is no day in the future where a warmer temperature will appear for the ith day, set result[i] to 0 instead.

Example 1:
Input: temperatures = [30,38,30,36,35,40,28]
Output: [1,4,1,2,1,0,0]

Example 2:
Input: temperatures = [22,21,20]
Output: [0,0,0]

Constraints:
1 <= temperatures.length <= 1000.
1 <= temperatures[i] <= 100 */

//stack implementation
const  dailyTemperatures = temperatures =>{
    const n = temperatures.length;
    const result = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
    let count = 0;      
    let j = i + 1;
    while (j < n) {
        count++;
        if (temperatures[j] > temperatures[i]) {
            result[i] = count;
            break;
        }
        j++;     
    }
    count = j === n ? 0 : count;
    result[i] = count;
    } 
    return result;
    
}

// Example usage:
const temperatures1 = [30, 38, 30, 36, 35, 40, 28];
console.log(dailyTemperatures(temperatures1)); // Output: [1, 4, 1, 2, 1, 0, 0]

//Time Complexity: O(n^2) in the worst case, where n is the number of days in the temperatures array. This occurs when for each day, we have to look through all subsequent days to find a warmer temperature.
//Space Complexity: O(1) as we are using a fixed amount of extra space regardless of the input size.    