//1.暴力法

// /**
//  * initialize your data structure here.
//  */
// var MedianFinder = function () {
//     this.data = [];
// };

// /**
//  * @param {number} num
//  * @return {void}
//  */
// MedianFinder.prototype.addNum = function (num) {
//     this.data.push(num);
// };

// /**
//  * @return {number}
//  */
// MedianFinder.prototype.findMedian = function () {
//     const len = this.data.length;
//     if (!len) {
//         return null;
//     }
//     const sortData = this.data.sort((a, b) => a - b);
//     let median;
//     if (len % 2 === 0) {
//         median = (sortData[len / 2 - 1] + sortData[len / 2]) / 2;
//     } else {
//         median = sortData[Math.floor(len / 2)];
//     }
//     return median;
// };

//2.二分查找:插入的时候排序.

/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
    this.data = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    if (this.data.length === 0) {
        this.data.push(num);
        return null;
    }

    let left = 0;
    let right = this.data.length - 1;

    while (left <= right) {
        const midIndex = Math.floor((left + right) / 2);
        const midData = this.data[midIndex];
        if (num === midData) {
            this.data.splice(midIndex, 0, num);
            return;
        } else if (num > midData) {
            left = midIndex + 1;
        } else {
            right = midIndex - 1;
        }
    }
    this.data.splice(right + 1, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    const len = this.data.length;
    if (!len) {
        return null;
    }
    const sortData = this.data;
    let median;
    if (len % 2 === 0) {
        median = (sortData[len / 2 - 1] + sortData[len / 2]) / 2;
    } else {
        median = sortData[Math.floor(len / 2)];
    }
    return median;
};
