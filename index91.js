function countSmileys(arr) {
    const validSmileyPattern = /^(:|;)(-|~)?(\)|D)$/;
    let count = 0;

    for (const face of arr) {
        if (validSmileyPattern.test(face)) {
            count++;
        }
    }

    return count;

}