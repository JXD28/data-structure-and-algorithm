//顺序存储
const arr = [1, 2, 3, 4, 5, 6, 67];

//获取元素操作
function getElem(list, position) {
    const len = list.length;
    if (len == 0 || position < 1 || position > len) {
        return Error;
    }
    return list[position - 1];
}
const result1 = getElem(arr, 5);

//插入操作
function insertElem(list, position, data) {
    const len = list.length;
    if (len == 0 || position < 1 || position > len) {
        return Error;
    }
    list.splice(position - 1, 0, data); //注意splice第一个参数是索引,及在索引位置处添加数据
    return list;
}
// const result2 = insertElem(arr, 5, '7878');

//删除操作
function deleteElem(list, position) {
    const len = list.length;
    if (len == 0 || position < 1 || position > len) {
        return Error;
    }
    list.splice(position - 1, 1); //注意splice第一个参数是索引,及在索引位置将数据删除
    return list;
}
const result3 = deleteElem(arr, 5);
