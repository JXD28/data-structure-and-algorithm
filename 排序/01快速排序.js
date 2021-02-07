//快速排序,冒泡排序的升级版->找枢纽,划分两部分

function quickSort(arr, low, high) {
    let pivot;
    if (low < high) {
        pivot = partition(arr, low, high);
        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
    }
}

/**
 * 将枢纽放再合适的位置使得其左边都比他小,右边都比他大
 * @param {*} arr
 * @param {*} low
 * @param {*} high
 */
function partition(arr, low, high) {
    let pivotKey = arr[low];
    while (low < high) {
        while (low < high && arr[high] >= pivotKey) {
            high--;
        }
        swap(arr, low, high);
        while (low < high && arr[low] <= pivotKey) {
            low++;
        }
        swap(arr, low, high);
    }
    return low;
}

function swap(arr, low, high) {
    [arr[low], arr[high]] = [arr[high], arr[low]];
}

const arr = [50, 10, 90, 30, 70, 40, 80, 60, 20];
quickSort(arr, 0, arr.length - 1);

console.log(arr);
