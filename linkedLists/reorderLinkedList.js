/*Reorder Linked List
You are given the head of a singly linked-list.

The positions of a linked list of length = 7 for example, can intially be represented as:

[0, 1, 2, 3, 4, 5, 6]

Reorder the nodes of the linked list to be in the following order:

[0, 6, 1, 5, 2, 4, 3]

Notice that in the general case for a list of length = n the nodes are reordered to be in the following order:

[0, n-1, 1, n-2, 2, n-3, ...]

You may not modify the values in the list's nodes, but instead you must reorder the nodes themselves.

Example 1:
Input: head = [2,4,6,8]
Output: [2,8,4,6]

Example 2:
Input: head = [2,4,6,8,10]
Output: [2,10,4,8,6]

Constraints:
1 <= Length of the list <= 1000.
1 <= Node.val <= 1000 */

const reorderLinkedList = (head) => {
        let slow = head;
        let fast = head.next;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
// Reverse the second half
        let second = slow.next;
        let prev = (slow.next = null);
        while (second !== null) {
            const tmp = second.next;
            second.next = prev;
            prev = second;
            second = tmp;
        }
// Merge the two halves
        let first = head;
        second = prev;
        while (second !== null) {
            const tmp1 = first.next;
            const tmp2 = second.next;
            first.next = second;
            second.next = tmp1;
            first = tmp1;
            second = tmp2;
        }   
        return head;
}

//Alternative implementation:
/*const reorderLinkedList = (head) => {
  // Step 1: Find the middle of the linked list
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the linked list
    let prev = null;
    let current = slow;
    while (current) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    // Step 3: Merge the two halves
    let first = head;
    let second = prev; // This is the head of the reversed second half
    while (second.next) {
        let temp1 = first.next;
        let temp2 = second.next;

        first.next = second;
        second.next = temp1;

        first = temp1;
        second = temp2;
    }

    return head;
};*/

// Example usage:
// const head = { val: 2, next: { val: 4, next: { val: 6, next: { val: 8, next: null } } } };
// const newHead = reorderLinkedList(head);
// console.log(newHead); // Output: { val: 2, next: { val: 8, next: { val: 4, next: { val: 6, next: null } } } }

module.exports = reorderLinkedList;

// Time Complexity: O(n)
// Space Complexity: O(1)   