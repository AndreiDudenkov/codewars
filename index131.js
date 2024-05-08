function findNextSquare(sq) {
    const sqrt = Math.sqrt(sq);
    if (Number.isInteger(sqrt)) {
        let nextSquare = sqrt + 1;
        while (true) {
            const square = nextSquare * nextSquare;
            if (Number.isInteger(square)) {
                return square;
            }
            nextSquare++;
        }
    } else {
        return -1;
    }
}