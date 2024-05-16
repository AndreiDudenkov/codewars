function longest(s1, s2) {
    const combinedString = s1 + s2;
    const distinctLetters = [...new Set(combinedString)].sort().join('');
    return distinctLetters;
}