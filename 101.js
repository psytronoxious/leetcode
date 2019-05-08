/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var checkRight = function(leftBranch, rightBranch) {
    if (!leftBranch && !rightBranch) return true;
    else if(!leftBranch || !rightBranch) return false;
    return leftBranch.val === rightBranch.val && checkLeft(leftBranch.left, rightBranch.right) && checkRight(leftBranch.right, rightBranch.left)
}

var checkLeft = function(leftBranch, rightBranch) {
    if (!leftBranch && !rightBranch) return true;
    else if(!leftBranch || !rightBranch) return false;
    return leftBranch.val === rightBranch.val && checkLeft(leftBranch.left, rightBranch.right) && checkRight(leftBranch.right, rightBranch.left)
}


var isSymmetric = function(root) {
    if (!root) return true;

    if (!root.left && !root.right) return true;
    if (!root.left || !root.right) return false;
    
    return root.left.val===root.right.val && checkLeft(root.left, root.right) && checkRight(root.left, root.right)
};