/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var checkRight = function(a, b){
    if (!a && !b) return true;
    if (!a || !b) return false;
    return a.val===b.val && checkLeft(a.left, b.left) && checkRight(a.right, b.right)
}

var checkLeft = function(a, b){
    if (!a && !b) return true;
    if (!a || !b) return false;
    return a.val===b.val && checkLeft(a.left, b.left) && checkRight(a.right, b.right)
}

var isSameTree = function(p, q) {
    if (!p && !q) return true; 
    if (!p || !q) return false;
    return p.val===q.val && checkLeft(p.left, q.left) && checkRight(p.right, q.right)
};