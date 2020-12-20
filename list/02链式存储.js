//链式存储
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
//结点
class Node {
    constructor(data) {
        this.data = data || null;
        this.next = null;
    }
}

//链表的创建
function createList(arr) {
    const len = arr.length;
    //添加头结点
    const headNode = new Node(len);
    const head = headNode;
    let preNode = headNode;
    for (let i = 0; i < len; i++) {
        const node = new Node();
        node.data = arr[i];
        preNode.next = node;
        preNode = node;
    }
    return head;
}

let head = createList(arr);

//单链表的读取
function getElem(head, position) {
    if (position < 1 || head.data === null || position > head.data) {
        return Error;
    }
    let curNode = head;
    for (let i = 0; i < position; i++) {
        curNode = curNode.next;
    }
    return curNode.data;
}

// const result1 = getElem(head, 0);

//单链表的插入,在该位置之前插入
function insertElem(head, position, data) {
    const len = head.data;
    if (position < 1 || position > len) {
        return Error;
    }

    let curNode = head;
    let preNode = head;
    let j = 0;
    while (curNode && j < position) {
        preNode = curNode;
        curNode = curNode.next;
        ++j;
    }

    const tempNode = new Node(data);
    preNode.next = tempNode;
    tempNode.next = curNode;

    ++head.data;
    return head;
}

// const result2 = insertElem(head, 9, 2.5);

//尾部插入
function appendElem(head, data) {
    let curNode = head;
    let preNode = head;
    while (curNode) {
        preNode = curNode;
        curNode = curNode.next;
    }
    const tempNode = new Node(data);
    preNode.next = tempNode;
    tempNode.next = curNode;

    ++head.data;
    return head;
}

// appendElem(head, 9);
// appendElem(head, 10);

//单链表的删除
function deleteElem(head, position) {
    const len = head.data;
    if (position < 1 || position > len) {
        return Error;
    }

    let curNode = head;
    let preNode = head;
    let j = 0;
    while (curNode && j < position) {
        preNode = curNode;
        curNode = curNode.next;
        ++j;
    }
    preNode.next = curNode.next;
    --head.data;
    return head;
}

// const result3 = deleteElem(head, 1);

//整链表的删除,由于浏览器自带垃圾回收机制,当对象不再被引用的时候就会被回收,与C语言需要手动free()不同
// head = null;

//循环链表
function createCircleList(arr) {
    const len = arr.length;
    //添加头结点
    const headNode = new Node(len);
    const head = headNode;
    let preNode = headNode;
    for (let i = 0; i < len; i++) {
        const node = new Node();
        node.data = arr[i];
        preNode.next = node;
        preNode = node;
    }
    //有头结点
    preNode.next = headNode;
    return head;
}

// const result4 = createCircleList(arr);

//双向链表
class DulNode {
    constructor(data) {
        this.data = data;
        this.prior = null;
        this.next = null;
    }
}

function createCircleList(arr) {
    const len = arr.length;
    //添加头结点
    const headNode = new DulNode(len);
    const head = headNode;
    let preNode = headNode;
    for (let i = 0; i < len; i++) {
        const node = new DulNode();
        node.data = arr[i];
        node.prior = preNode;
        preNode.next = node;
        preNode = node;
    }
    //有头结点
    preNode.next = headNode;
    headNode.prior = preNode;
    return head;
}
