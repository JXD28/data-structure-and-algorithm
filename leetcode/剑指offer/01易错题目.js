//有序二维数组中查找
//在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

//时间复杂度O(n^2)
//原因:审题->没看到从上到下也是递增的

// var findNumberIn2DArray = function (matrix, target) {
//     let len = matrix.length;
//     while (len > 0) {
//         const leftBot = matrix[len - 1][0];
//         if (target < leftBot) {
//             --len;
//         } else {
//             if (target == leftBot) {
//                 return true;
//             }
//             for (let item of matrix[len - 1]) {
//                 if (item == target) {
//                     return true;
//                 }
//             }
//             --len;
//         }
//     }
//     return false;
// };

//时间复杂度O(n+m)
// var findNumberIn2DArray = function (matrix, target) {
//     let len = matrix.length;
//     if (len == 0) {
//         return false;
//     }

//     const rows = len - 1;
//     const cols = matrix[0].length;
//     let row = rows;
//     let col = 0;
//     while (row >= 0 && col < cols) {
//         if (matrix[row][col] == target) {
//             return true;
//         } else if (matrix[row][col] > target) {
//             --row;
//         } else {
//             ++col;
//         }
//     }
//     return false;
// };

// const array = [
//     [1, 4, 7, 11, 15],
//     [2, 5, 8, 12, 19],
//     [3, 6, 9, 16, 22],
//     [10, 13, 14, 17, 24],
//     [18, 21, 23, 26, 30],
// ];
// const target = 5;

// console.log(findNumberIn2DArray(array, target));

//重建二叉树
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var buildTree = function (preorder, inorder) {
    if (preorder.length == 0 || inorder.length == 0) {
        return null;
    }
    const rootVal = preorder[0];
    let root = new TreeNode(rootVal);
    const rootIndexInorder = inorder.indexOf(rootVal);

    root.left = buildTree(
        preorder.slice(1, rootIndexInorder + 1),
        inorder.silce(0, rootIndexInorder)
    );
    root.right = buildTree(
        preorder.slice(rootIndexInorder + 1),
        inorder.silce(rootIndexInorder + 1)
    );
    return root;
};

const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];
buildTree(preorder, inorder);
