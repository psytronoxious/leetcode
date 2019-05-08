/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val) {
	this.val = val;
	this.next = null;
}

var createList = function(arr) {
	var l1 = new ListNode();
	for (let i = 0; i < arr.length; i++) {
		if (!l1.val) {
			l1.val = arr[i];
			continue;
		}
		let temp = l1;
		while (temp.next) {
			temp = temp.next;
		}
		temp.next = new ListNode(arr[i]);
	}
	return l1;
};

var deleteDuplicates = function(head) {
	if (!head) return null;
	let arr = [];
	let lList = new ListNode();
	while (true) {
		if (head) {
			if (head.next && head.val === head.next.val) {
			} else {
				// arr.push(head.val)
				if (typeof lList.val === 'undefined') {
					lList.val = head.val;
				} else {
					let temp = lList;
					while (temp.next) {
						temp = temp.next;
					}
					temp.next = new ListNode(head.val);
				}
			}
			head = head.next;
		} else {
			break;
		}
	}
	return lList;
};

let a = [ 1, 1, 1, 2, 3, 3 ];
var l1 = new ListNode();

for (let i = 0; i < a.length; i++) {
	if (!l1.val) {
		l1.val = a[i];
		continue;
	}
	let temp = l1;
	while (temp.next) {
		temp = temp.next;
	}
	temp.next = new ListNode(a[i]);
}

console.log(deleteDuplicates(l1));
