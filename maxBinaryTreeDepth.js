/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


const maxDepth = (root) => {
    return depthHandler(root, 1)
}

const depthHandler = (root, num) => {
    if(root === null){
        return 0
    }
    if(root.right === null && root.left === null){
        return num
    }
    if(root.right && root.left){
        return Math.max(depthHandler(root.right, num+1), depthHandler(root.left, num+1))
    }
    else if(root.right != null){
        return depthHandler(root.right, num+1)
    }
    else {
        return depthHandler(root.left, num+1)
    }
}

