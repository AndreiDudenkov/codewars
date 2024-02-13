function findSummands(n) {
    const cube = Math.pow(n, 3);
    const summands = [];
    let currentNumber = 1;

    for (let i = 0; i < n; i++) {
        summands.push(currentNumber);
        currentNumber += 2;
    }

    while (summands.reduce((sum, num) => sum + num, 0) !== cube) {
        summands.shift();
        summands.push(currentNumber);
        currentNumber += 2;
    }

    return summands;
}
