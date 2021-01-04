//创建图

function Graph() {
    this.vertexes = []; //存储顶点
    this.adjList = new Map();
}

//添加顶点
Graph.prototype.addVertex = function (vertex) {
    this.vertexes.push(vertex);
    this.adjList.set(vertex, []);
};

//添加边
Graph.prototype.addEdge = function (vertex1, vertex2) {
    this.adjList.get(vertex1).push(vertex2);
    this.adjList.get(vertex2).push(vertex1);
};

//打印图
Graph.prototype.toString = function () {
    let resultSrt = '';
    for (let vertex of this.vertexes) {
        resultSrt += vertex + '->';
        this.adjList.get(vertex).forEach(function (item) {
            resultSrt += item + ' ';
        });
        resultSrt += '\n';
    }
    return resultSrt;
};

// 测试代码
var graph = new Graph();

// 添加顶点
var myVertexes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (var i = 0; i < myVertexes.length; i++) {
    graph.addVertex(myVertexes[i]);
}

// 添加边
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph.toString());

//广度优先搜索(BFS) 使用队列

//初始化结点颜色
//白色: 表示该顶点还没有被访问.
//灰色: 表示该顶点被访问过, 但并未被探索过.
//黑色: 表示该顶点被访问过且被完全探索过.
Graph.prototype.initVertexes = function () {
    let color = {};
    for (let i = 0; i < this.vertexes.length; i++) {
        color[this.vertexes[i]] = 'white';
    }
    return color;
};

//创建队列构造函数
function Queue() {
    this.data = [];
    Queue.prototype.enqueue = function (value) {
        this.data.push(value);
    };
    Queue.prototype.dequeue = function () {
        return this.data.shift();
    };
    Queue.prototype.isEmpty = function () {
        return this.data.length == 0;
    };
}

//创建主体函数
Graph.prototype.bfs = function (vertex, handle) {
    //1.初始化结点颜色
    const color = graph.initVertexes();
    //2.构建队列
    const queue = new Queue();
    //3.第一个顶点压入栈
    queue.enqueue(vertex);
    //4.取出数据->变颜色->相邻顶点压入栈
    while (!queue.isEmpty()) {
        //出栈
        const deQueue = queue.dequeue();
        //变颜色
        color[deQueue] = 'gray';
        //相邻顶点入栈
        this.adjList.get(deQueue).forEach((item) => {
            if (color[item] === 'white') {
                color[item] = 'gray'; //必须加上,原因:此处遍历的顶点中可能存在于队列中,避免重复压栈
                queue.enqueue(item);
            }
        });
        color[deQueue] = 'black';

        if (handle) {
            handle(deQueue);
        }
    }
};

//测试
let result = '';
graph.bfs(graph.vertexes[0], function (v) {
    result += v + ' ';
});
console.log(result);

//深度优先遍历(DFS)

Graph.prototype.dfs = function (handle) {
    //初始顶点颜色
    const color = graph.initVertexes();

    for (let i = 0; i < this.vertexes.length; i++) {
        if (color[this.vertexes[i]] === 'white') {
            this.dfsVisit(this.vertexes[i], color, handle);
        }
    }
};

Graph.prototype.dfsVisit = function (vertex, color, handle) {
    color[vertex] = 'gray';

    if (handle) {
        handle(vertex);
    }

    this.adjList.get(vertex).forEach((item) => {
        if (color[item] == 'white') {
            this.dfsVisit(item, color, handle);
        }
    });

    color[vertex] = 'black';
};

//测试
let result1 = '';
graph.dfs(function (v) {
    result1 += v + ' ';
});
console.log(result1);
