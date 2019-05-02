/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

function ListNode(val) {
	this.val = val;
	this.next = null;
}
var mergeTwoLists = function(l1, l2) {
	var final = new ListNode(null);

	while (l1 && l2) {
		if (l1.val <= l2.val) {
			if (final.val===null) {
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
			if (final.val===null) {
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
		if (final.val===null) {
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
		if (final.val===null) {
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

var mergeKLists1 = function(lists) {
	// console.log("lists: ", lists)
  let final = null
    for (let i=0; i<lists.length; i++){
	    final = mergeTwoLists(final, lists[i])
	    console.log(i, final)
    }
    
    return final
};

var mergeKLists = function(lists) {
	let arr = []
	for (let i=0; i < lists.length; i++){
		while(lists[i]){
			arr.push(lists[i].val)
			lists[i] = lists[i].next
		}
	}
    if (arr.length===0) return null
	var finalArr = arr.sort((a, b)=>{
		return a-b
	})
    var final = new ListNode(finalArr[0]);
	for (let i = 1; i < finalArr.length; i++) {
		let temp = final;
		while (temp.next) {
			temp = temp.next;
		}
		temp.next = new ListNode(finalArr[i]);
	}
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
let c = [-2, -1, 0, 2];
var l3 = new ListNode();

// var tail = new ListNode()
// l1.next = tail

for (let i = 0; i < c.length; i++) {
	if (!l3.val) {
		l3.val = c[i];
		continue;
	}
	let temp = l3;
	while (temp.next) {
		temp = temp.next;
	}
	temp.next = new ListNode(c[i]);
}

console.log(l1, l2)
let out = mergeKLists([l1, l2, l3])
// let out = mergeTwoLists(l1, l2)
// let out = mergeKLists([])
// console.log(out)
while (out && 'next' in out) {
	console.log(out.val)
	out = out.next;
}