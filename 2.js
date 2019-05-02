/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
	this.val = val;
	this.next = null;
}

var addTwoNumbers = function(l1, l2) {
	if (!l1 && !l2) return null;
	if (!l1) return l2;
	if (!l2) return l1;
	let l = new ListNode();
	let carry = 0;
	while (l1 && l2) {
		if (typeof l.val === 'undefined') {
			let tempVal = l1.val + l2.val + carry;
			if (tempVal > 9) {
				l.val = tempVal - 10;
				carry = 1;
			} else {
				l.val = tempVal;
				carry = 0;
			}
			l1 = l1.next;
			l2 = l2.next;
		} else {
			let temp = l;
			while (temp.next) {
				temp = temp.next;
			}
			let tempVal = l1.val + l2.val + carry;
			if (tempVal > 9) {
				tempVal = tempVal - 10;
				carry = 1;
			} else {
				carry = 0;
			}
			temp.next = new ListNode(tempVal);
			l1 = l1.next;
			l2 = l2.next;
		}
	}
	while (l1) {
		let temp = l;
		while (temp.next) {
			temp = temp.next;
		}
		let tempVal = l1.val + carry;
		if (tempVal > 9) {
			tempVal = tempVal - 10;
			carry = 1;
		} else {
			carry = 0;
		}
		temp.next = new ListNode(tempVal);
		l1 = l1.next;
	}

	while (l2) {
		let temp = l;
		while (temp.next) {
			temp = temp.next;
		}
		let tempVal = l2.val + carry;
		if (tempVal > 9) {
			tempVal = tempVal - 10;
			carry = 1;
		} else {
			carry = 0;
		}
		temp.next = new ListNode(tempVal);
		l2 = l2.next;
	}

	if (carry === 1) {
		let temp = l;
		while (temp.next) {
			temp = temp.next;
		}
		temp.next = new ListNode(1);
	}
	return l;
};

let a = [ 5 ];
var l1 = new ListNode();

// var tail = new ListNode()
// l1.next = tail

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

let b = [ 5 ];
var l2 = new ListNode();

// var tail = new ListNode()
// l1.next = tail

for (let i = 0; i < b.length; i++) {
	if (!l2.val) {
		l2.val = b[i];
		continue;
	}
	let temp = l2;
	while (temp.next) {
		temp = temp.next;
	}
	temp.next = new ListNode(b[i]);
}

console.log(l1, l2);

out = addTwoNumbers(l1, l2);
console.log(out);
while (out && 'next' in out) {
	console.log(out.val);
	out = out.next;
}
