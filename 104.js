/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
	if (root == null) return 0;
	let d = [1]; 
	let q = [];
	q.push(root)
	while(q.length>0){
	    if(q[0].left!= null) {
		q.push(q[0].left)
		d.push(d[0]+1)
	    }
	    if(q[0].right!= null) {
		q.push(q[0].right)
		d.push(d[0]+1)
	    }
	    
	    q.shift()
	    if (d.length===1) return d[0]
	    d.shift()
	}
    };