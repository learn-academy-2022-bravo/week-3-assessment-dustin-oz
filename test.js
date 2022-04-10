function sumFibs(num) {
    if (num <= 2) {
        return 1;
    }
    return sumFibs(num - 2) + sumFibs(num - 1);
}

console.log(sumFibs(10));