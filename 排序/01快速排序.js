//快速排序,冒泡排序的升级版->找枢纽,划分两部分

function quickSort(arr, low, hight) {
    let pivot;
    if (low < hight) {
        pivot = partition(arr, low, hight);
        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, hight);
    }
}

/**
 * 将枢纽放再合适的位置使得其左边都比他小,右边都比他大
 * @param {*} arr
 * @param {*} low
 * @param {*} hight
 */
function partition(arr, low, hight) {
    let pivotKey = arr[low];
    while (low < hight) {
        while (low < hight && arr[hight] >= pivotKey) {
            hight--;
        }
        swap(arr, low, hight);
        while (low < hight && arr[low] <= pivotKey) {
            low++;
        }
        swap(arr, low, hight);
    }
    return low;
}

function swap(arr, low, hight) {
    [arr[low], arr[hight]] = [arr[hight], arr[low]];
}

const arr = [50, 10, 90, 30, 70, 40, 80, 60, 20];
quickSort(arr, 0, arr.length - 1);

console.log(arr);
