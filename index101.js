function order(words){
    if (words === '') {
        return '';
    }

    const word = words.split(' ');
    word.sort((a, b) => {
        const numA = parseInt(a.match(/\d+/)[0]);
        const numB = parseInt(b.match(/\d+/)[0]);
        return numA - numB;
    });

    return word.join(' ');
}