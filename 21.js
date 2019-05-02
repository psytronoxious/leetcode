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

var mergeTwoLists = function(l1, l2) {
	var final = new ListNode(null);
	let arr = []
	while(l1){
		if (l1.val!== null) {
			arr.push(parseInt(l1.val) )
		}
		l1 = l1.next
	}
	while(l2){
		if (l2.val!== null) {
			arr.push(parseInt(l2.val) )
		}
		l2 = l2.next
	}
	
	var finalArr = arr.sort((a, b)=>{
		return a-b
	})

	for (let i = 0; i < finalArr.length; i++) {
		if (final.val===null) {
			final.val = finalArr[i];
			continue;
		}
		let temp = final;
		while (temp.next) {
			temp = temp.next;
		}
		temp.next = new ListNode(finalArr[i]);
	}
	if (final.val === null) return null;
	return final;
};
var mergeTwoLists1 = function(l1, l2) {
	var final = new ListNode(null);

	while (l1 && l2) {
		if (l1.val <= l2.val) {
			if (!final.val) {
				final.val = l1.val;
				l1 = l1.next;
			} else {
				let temp = final;
				while (temp.next) {
					temp = temp.next;
				}
				temp.next = new ListNode(l1.val);
				l1 = l1.next;
			}
			// console.log('in if: ', final);
		} else {
			if (!final.val) {
				final.val = l2.val;
				l2 = l2.next;
			} else {
				let temp = final;
				while (temp.next) {
					temp = temp.next;
				}
				temp.next = new ListNode(l2.val);
				l2 = l2.next;
			}
			// console.log('in else: ', final);
		}
	}
	while (l1) {
		if (!final.val) {
			final.val = l1.val;
			l1 = l1.next;
		} else {
			let temp = final;
			while (temp.next) {
				temp = temp.next;
			}
			if (l1.val!==null) {
				temp.next = new ListNode(l1.val);
			}

			l1 = l1.next;
		}

		// console.log("in while l1: ", final)
	}
	while (l2) {
		if (!final.val) {
			final.val = l2.val;
			l2 = l2.next;
		} else {
			let temp = final;
			while (temp.next) {
				temp = temp.next;
			}
			if (l2.val!==null) {
				temp.next = new ListNode(l2.val);
			}

			l2 = l2.next;
		}

		// console.log('in while l2: ', final);
		// final.next = new ListNode(l2.val)
		// l2 = l2.next
	}
	if (final.val === null) return null;
	return final;
};

let a = [-1, 1];
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

let b = [ -3, 1, 4];
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

// l1.next=new ListNode(2)
// console.log(l1);
// console.log(l2);
let out = mergeTwoLists(l1, l2);
console.log(out)
while (out && 'next' in out) {
	console.log(out.val)
	out = out.next;
}
