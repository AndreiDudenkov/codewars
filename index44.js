function DNAStrand(dna){

    const changeChar = char => {
        switch (char) {
            case 'A':
                return 'T';
                break;
            case 'T':
                return 'A';
                break;
            case 'C':
                return 'G';
                break;
            case 'G':
                return 'C'
        }
    }
    return  dna.split('').map(char => changeChar(char)).join('')
}
