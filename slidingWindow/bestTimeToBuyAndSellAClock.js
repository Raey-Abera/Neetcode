/*Best Time to Buy and Sell Stock
You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day. You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

Example 1:
Input: prices = [10,1,5,6,7,1]
Output: 6
Explanation: Buy prices[1] and sell prices[4], profit = 7 - 1 = 6.

Example 2:
Input: prices = [10,8,7,5,2]
Output: 0
Explanation: No profitable transactions can be made, thus the max profit is 0.

Constraints:
1 <= prices.length <= 100
0 <= prices[i] <= 100 */

const maxProfit = (prices) => {
    let left = 0; // Buy
    let right = 1; // Sell
    let maxProfit = 0;

    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            const profit = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit, profit);
        } else {
            left = right;
        }
        right++;
    }
    return maxProfit;       
}

console.log(maxProfit([10,1,5,6,7,1])); // Output: 6
console.log(maxProfit([10,8,7,5,2])); // Output: 0


// Time Complexity: O(n)
// Space Complexity: O(1)


               