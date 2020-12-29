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
