function erFun(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let point = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= point) {
            right.push(arr[i]);
        } else {
            left.push(arr[i]);
        }
    }
    return erFun(left).concat(point, erFun(right));
}

const arr = [5, 7, 3, 5, 9, 3, 2, 1];
const result = erFun(arr);
