function pipeFix(numbers){
    const minVal = Math.min(...numbers);
    const maxVal = Math.max(...numbers);
    const fixedPipes = [];

    for (let i = minVal; i <= maxVal; i++) {
        fixedPipes.push(i);
    }

    return fixedPipes;
}