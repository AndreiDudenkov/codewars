function expandedForm_(num) {
    const digits = num.toString().split('');
    const expandedFormArray = [];
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] !== '0') {
            const expandedPart = digits[i] * Math.pow(10, digits.length - 1 - i);
            expandedFormArray.push(expandedPart);
        }
    }
    return expandedFormArray.join(' + ');
}