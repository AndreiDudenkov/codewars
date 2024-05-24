function reverseLetter(str) {
    let onlyLetters = str.replace(/[^a-zA-Z]/g, '');
    let reversed = onlyLetters.split('').reverse().join('');

    return reversed;


}