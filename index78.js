function duplicateCount(text){
    const charCount = {};
    const lowerStr = text.toLowerCase();
    let count = 0;

    for (let i = 0; i < lowerStr.length; i++) {
        const char = lowerStr[i];
        charCount[char] = (charCount[char] || 0) + 1;

        if (charCount[char] === 2) {
            count++;
        }
    }

    return count;
}