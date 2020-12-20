//栈的应用递归

//斐波那契数列实现
function Fbi(n) {
    if (n < 2) {
        return n == 0 ? 0 : 1;
    }
    return Fbi(n - 1) + Fbi(n - 2);
}

function main() {
    for (let i = 0; i < 40; i++) {
        console.log('Fbi', Fbi(i));
    }
}

main();
