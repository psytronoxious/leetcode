/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
	if (root == null) return [];
	let q = [];
	let depth = [ 1 ];
	let lastDepth = 0;
	let final = [];
	q.push(root);
	let row = [ root.val ];
	while (q.length > 0) {
		let temp = depth.shift();
		if (temp !== lastDepth) {
			final.push(row);
			row = [];
			lastDepth = temp;
		}
		if (q[0].left != null) {
			q.push(q[0].left);
			depth.push(temp + 1);
		}
		if (q[0].right != null) {
			q.push(q[0].right);
			depth.push(temp + 1);
		}
		if (q[0].left) row.push(q[0].left.val);
		if (q[0].right) row.push(q[0].right.val);
		q.shift();
	}
	return final.reverse();
};
