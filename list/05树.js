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

    //前序遍历搜索二叉树
    preOrderTraverse = (handle) => {
        this.preOrderTraverseNode(this.root, handle);
    };

    preOrderTraverseNode = (root, handle) => {
        if (root === null) {
            return;
        }
        handle(root.data);
        this.preOrderTraverseNode(root.left, handle);
        this.preOrderTraverseNode(root.right, handle);
    };

    //中序遍历搜索二叉树
    inOrderTraverse = (handle) => {
        this.inOrderTraverseNode(this.root, handle);
    };
    inOrderTraverseNode = (root, handle) => {
        if (root === null) {
            return;
        }

        this.inOrderTraverseNode(root.left, handle);
        handle(root.data);
        this.inOrderTraverseNode(root.right, handle);
    };

    //后序遍历搜索二叉树
    postOrderTraverse = (handle) => {
        this.postOrderTraverseNode(this.root, handle);
    };

    postOrderTraverseNode = (root, handle) => {
        if (root === null) {
            return;
        }
        this.postOrderTraverseNode(root.left, handle);
        this.postOrderTraverseNode(root.right, handle);
        handle(root.data);
    };

    //最小值
    min = () => {
        let node = this.root;
        while (node.left) {
            node = node.left;
        }
        return node.data;
    };

    //最大值
    max = () => {
        let node = this.root;
        while (node.right) {
            node = node.right;
        }
        return node.data;
    };

    //搜索特定值,循环的方式
    search = (data) => {
        let node = this.root;
        while (node) {
            if (data < node.data) {
                node = node.left;
            } else if (data > node.data) {
                node = node.right;
            } else {
                return true;
            }
        }
        return false;
    };
    //删除
    deleteNode = (data) => {
        let curNode = this.root;
        let parent = curNode;
        let isLeftChild = true;
        while (curNode) {
            if (data < curNode.data) {
                isLeftChild = true;
                parent = curNode;
                curNode = curNode.left;
            } else if (data > curNode.data) {
                isLeftChild = false;
                parent = curNode;
                curNode = curNode.right;
            } else {
                return this.delete(curNode, parent, isLeftChild);
            }
        }
    };

    delete = (node, parent, isLeftChild) => {
        if (node.left === null) {
            node = node.right;
        } else if (node.right === null) {
            node = node.left;
        } else {
            let nodeLeft = node.left;
            let preNode = nodeLeft.right || nodeLeft;
            //寻找删除结点的前驱
            while (preNode) {
                preNode = preNode.right;
            }
            node.data = preNode.data;
            if (preNode != nodeLeft) {
                nodeLeft.right = preNode.left;
            } else {
                nodeLeft.left = preNode.left;
            }
        }
        isLeftChild ? (parent.left = node) : (parent.right = node);

        return this.root;
    };
}

const handle = (data) => {
    console.log('output', data);
};

const biTree = new BinarySearchTree();
biTree.insert(12);
biTree.insert(3);
biTree.insert(5);
biTree.insert(14);
biTree.insert(7);
biTree.insert(100);

biTree.preOrderTraverse(handle);
console.log('------------------');
biTree.inOrderTraverse(handle);
console.log('------------------');
biTree.postOrderTraverse(handle);
console.log('------------------');
handle(biTree.min());
handle(biTree.max());
console.log('------------------');
handle(biTree.search(101));
console.log('------------------');
handle(biTree.deleteNode(5));
