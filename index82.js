function high(x){
    const words = x.split(' ');
    let highestScore = 0;
    let highestWord = '';

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let score = 0;

        for (let j = 0; j < word.length; j++) {
            const char = word[j];
            score += char.charCodeAt(0) - 96;
        }

        if (score > highestScore || (score === highestScore && i < words.indexOf(highestWord))) {
            highestScore = score;
            highestWord = word;
        }
    }

    return highestWord;
}