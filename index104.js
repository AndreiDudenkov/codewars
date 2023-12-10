function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false;
    }
    let x = 0, y = 0;
    for (let i = 0; i < walk.length; i++) {
        const direction = walk[i];
        if (direction === 'n') {
            y += 1;
        } else if (direction === 's') {
            y -= 1;
        } else if (direction === 'e') {
            x += 1;
        } else if (direction === 'w') {
            x -= 1;
        }
    }
    return x === 0 && y === 0;
}