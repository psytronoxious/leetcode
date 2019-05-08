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


var deleteDuplicates = function(head) {
	if (!head) return null;
	let lList = new ListNode();
	let removeLast = false
	while (true) {
		if (head) {
			if (head.next && head.val === head.next.val) {
				removeLast = true
			} else {
				if (removeLast){
					removeLast = false
				}else{
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
			}
			if (head) head = head.next;
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


