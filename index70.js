function squareDigits(num) {
    let result = '';
    const numStr = num.toString();
    for (let i = 0; i < numStr.length; i++) {
        const digit = parseInt(numStr[i]);
        result += (digit ** 2).toString();
    }
    return parseInt(result);
}
