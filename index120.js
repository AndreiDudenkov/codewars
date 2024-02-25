function encrypt(text, n) {
    if ( text === null||  text === ''|| n <= 0) {
        return text;
    }

    for (let i = 0; i < n; i++) {
        const oddChars = [];
        const evenChars = [];

        for (let j = 0; j < text.length; j++) {
            if (j % 2 === 1) {
                oddChars.push(text[j]);
            } else {
                evenChars.push(text[j]);
            }
        }

        text = oddChars.concat(evenChars).join('');
    }

    return text;

}

function decrypt(S, N) {
    if (S === '' || S === null || N <= 0) {
        return S;
    }

    for (let i = 0; i < N; i++) {
        const odd = S.slice(0, S.length / 2);
        const even = S.slice(S.length / 2);
        let decrypted = "";

        for (let j = 0; j < odd.length; j++) {
            decrypted += even[j] + odd[j];
        }

        if (odd.length < even.length) {
            decrypted += even[even.length - 1];
        }

        S = decrypted;
    }

    return S;
}