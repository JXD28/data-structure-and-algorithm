//串结构又名字符串
const strS = 'qwerabababc';
const strT = 'ababc';
/**
 * 朴素的模式匹配算法
 * @param {string} strS 主串
 * @param {string} strT 子串
 * @param {number} pos 从主串的pos位置开始比较
 */
function index(strS, strT, pos) {
    let i = pos;
    let j = 0;
    const lenS = strS.length;
    const lenT = strT.length;
    while (i < lenS && j < lenT) {
        if (strS[i] == strT[j]) {
            ++i;
            ++j;
        } else {
            i = i - j + 1;
            j = 0;
        }
    }
    if (j >= lenT) {
        return i - lenT;
    } else {
        return 0;
    }
}

const result = index(strS, strT, 0);

/**
 * 构造next数组
 * @param {string} strT 子串
 */
function get_next(strT) {
    const lenT = strT.length;
    let i = 0; //next数组的下标
    let j = -1; //next数组的值
    let next = Array(30);
    next[i] = j;
    while (i < lenT - 1) {
        if (j == -1 || strT[i] == strT[j]) {
            ++i;
            ++j;
            next[i] = j;
        } else {
            j = next[j]; //j回溯
        }
    }
    return next;
}
/**
 * KMP匹配
 * @param {string} strS 主串
 * @param {string} strT 子串
 * @param {number} pos 从主串pos位置开始匹配
 */
function indexKMP(strS, strT, pos) {
    let i = pos;
    let j = 0;
    const lenS = strS.length;
    const lenT = strT.length;
    const next = get_next(strT);
    while (i < lenS && j < lenT) {
        if (j == -1 || strS[i] == strT[j]) {
            ++i;
            ++j;
        } else {
            j = next[j];
        }
    }
    if (j >= lenT) {
        return i - lenT;
    } else {
        return 0;
    }
}

const result2 = indexKMP(strS, strT, 1);
