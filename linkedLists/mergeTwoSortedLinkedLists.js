/*Merge Two Sorted Linked Lists
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted linked list and return the head of the new sorted linked list.

The new list should be made up of nodes from list1 and list2.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,5]
Output: [1,1,2,3,4,5]

Example 2:
Input: list1 = [], list2 = [1,2]
Output: [1,2]

Example 3:
Input: list1 = [], list2 = []
Output: []

Constraints:
0 <= The length of the each list <= 100.
-100 <= Node.val <= 100 */
const mergeTwoSortedLinkedLists = (list1, list2) => {
    const dummy = { val: 0, next: null };
    let current = dummy;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // Attach the remaining nodes, if any
    if (list1) {
        current.next = list1;
    } else if (list2) {
        current.next = list2;
    }

    return dummy.next; // Return the merged list, skipping the dummy node
};

// Example usage:
// const list1 = { val: 1, next: { val: 2, next: { val: 4, next: null } } };
// const list2 = { val: 1, next: { val: 3, next: { val: 5, next: null } } };
// const mergedList = mergeTwoSortedLinkedLists(list1, list2);
// console.log(mergedList); // Output: { val: 1, next: { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } } }

module.exports = mergeTwoSortedLinkedLists;

// Time Complexity: O(n + m) where n and m are the lengths of list1 and list2
// Space Complexity: O(1)