//创建二叉排序树/二叉查找树

//创建树结点
class BiTNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    root = null;
    //插入数据
    insert = (data) => {
        const newNode = new BiTNode(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    };

    insertNode = (curNode, newNode) => {
        //查左树,看能否插进去
        if (newNode.data < curNode.data) {
            if (curNode.left === null) {
                curNode.left = newNode;
            } else {
                this.insertNode(curNode.left, newNode);
            }
        } else {
            //查右树
            if (curNode.right === null) {
                curNode.right = newNode;
            } else {
                this.insertNode(curNode.right, newNode);
            }
        }
    };
}

const biTree = new BinarySearchTree();
biTree.insert(12);
biTree.insert(3);
biTree.insert(5);
biTree.insert(14);
biTree.insert(7);
biTree.insert(100);
