function countSalutes(hallway) {
    let salutes = 0;
    let rightCount = 0;

    for (const char of hallway) {
        if (char === '>') {
            rightCount++;
        } else if (char === '<') {
            salutes += rightCount * 2;
        }
    }

    return salutes;
}