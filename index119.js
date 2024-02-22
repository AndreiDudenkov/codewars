function longestConsec(strarr, k) {
    const n = strarr.length;

    if (n === 0 || k > n || k <= 0) {
        return "";
    }

    let longestString = "";

    for (let i = 0; i < n - k + 1; i++) {
        const currentString = strarr.slice(i, i + k).join("");
        if (currentString.length > longestString.length) {
            longestString = currentString;
        }
    }

    return longestString;
}