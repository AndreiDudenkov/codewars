function isPangram(string){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowerCaseString = string.toLowerCase();

    for (const char of alphabet) {
        if (!lowerCaseString.includes(char)) {
            return false;
        }
    }

    return true;
}