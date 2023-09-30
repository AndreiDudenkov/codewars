function gimme(triplet) {
    let sorted = triplet.slice().sort((a, b) => a - b);
    let middleElement = sorted[1];
    return triplet.indexOf(middleElement);
}