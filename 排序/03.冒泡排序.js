function maopao(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const newArr = maopao(arr);
console.log('🚀 ~ file: 03.冒泡排序.js ~ line 16 ~ newArr', newArr);
