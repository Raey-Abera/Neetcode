/*Koko Eating Bananas
You are given an integer array piles where piles[i] is the number of bananas in the ith pile. You are also given an integer h, which represents the number of hours you have to eat all the bananas.

You may decide your bananas-per-hour eating rate of k. Each hour, you may choose a pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, you may finish eating the pile but you can not eat from another pile in the same hour.

Return the minimum integer k such that you can eat all the bananas within h hours.

Example 1:
Input: piles = [1,4,3,2], h = 9
Output: 2

Explanation: With an eating rate of 2, you can eat the bananas in 6 hours. With an eating rate of 1, you would need 10 hours to eat all the bananas (which exceeds h=9), thus the minimum eating rate is 2.

Example 2:
Input: piles = [25,10,23,4], h = 4
Output: 25

Constraints:
1 <= piles.length <= 1,000
piles.length <= h <= 1,000,000
1 <= piles[i] <= 1,000,000,000 */

//Binary Search Approach    
const minEatingSpeed = (piles, h) => {
    let left = 1;
    let right = Math.max(...piles);
    let res = right 
        
    while (left <= right) {
    const mid = Math.floor((left + right) / 2);
        
    let totalTime = 0;
    for (let pile of piles) {
        totalTime += Math.ceil(pile / mid);
    }   
        if (totalTime <= h) {
            res = mid;
            right = mid -1
        } else {
            left = mid + 1;
        }
    }
    return res;
}

//Time Complexity: O(n log m), where n is the number of piles and m is the maximum number of bananas in a pile.
//Space Complexity: O(1) since we are using only a constant amount of extra space.

// Alternative Implementation
/*const minEatingSpeed = (piles, h) => {
    let left = 1;
    let right = Math.max(...piles);

    const canEatAll = (speed) => {
        let hoursNeeded = 0;
        for (const pile of piles) {
            hoursNeeded += Math.ceil(pile / speed);
        }
        return hoursNeeded <= h;
    };

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (canEatAll(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};*/

// Example usage:
const piles1 = [1, 4, 3, 2];
const h1 = 9;
console.log(minEatingSpeed(piles1, h1)); // Output: 2

const piles2 = [25, 10, 23, 4];
const h2 = 4;
console.log(minEatingSpeed(piles2, h2)); // Output: 25

//Time Complexity: O(n log m), where n is the number of piles and m is the maximum number of bananas in a pile.
//Space Complexity: O(1) since we are using only a constant amount of extra space.  