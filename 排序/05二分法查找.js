function searchEr(arr, num) {
    let min = 0;
    let max = arr.length - 1;
    while (true) {
        let mid = parseInt((min + max) / 2);
        if (arr[mid] > num) {
            max = mid - 1;
        } else if (arr[mid] < num) {
            min = mid - 1;
        } else {
            return mid;
        }
        if (max < min) {
            return '没找到';
        }
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let index = searchEr(arr, 7);
