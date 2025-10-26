/*Reverse Linked List
Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.

Example 1:
Input: head = [0,1,2,3]
Output: [3,2,1,0]

Example 2:
Input: head = []
Output: []

Constraints:
0 <= The length of the list <= 1000.
-1000 <= Node.val <= 1000 */

const reverseLinkedList = (head) => {
    let prev = null;
    let current = head;

    while (current) {
        let nextNode = current.next; // Store the next node
        current.next = prev;         // Reverse the link
        prev = current;              // Move prev to current
        current = nextNode;          // Move to the next node
    }

    return prev; // New head of the reversed list
};

// Example usage:
// const head = { val: 0, next: { val: 1, next: { val: 2, next: { val: 3, next: null } } } };
// const newHead = reverseLinkedList(head);
// console.log(newHead); // Output: { val: 3, next: { val: 2, next: { val: 1, next: { val: 0, next: null } } } }

module.exports = reverseLinkedList;

// Time Complexity: O(n)
// Space Complexity: O(1)   