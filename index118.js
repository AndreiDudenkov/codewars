function findNb(m) {
    let totalVolume = 0;
    let n = 1;

    while (totalVolume < m) {
        const cubeVolume = Math.pow(n, 3);
        totalVolume += cubeVolume;
        n++;
    }

    if (totalVolume === m) {
        return n - 1;
    } else {
        return -1;
    }
}
