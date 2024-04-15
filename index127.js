function checkExam(array1, array2) {
    let res = 0;

    for (let i = 0; i < array1.length; i++) {
        if (array2[i] === '') {
            res += 0;
        } else if (array1[i] === array2[i]) {
            res += 4;
        } else {
            res -= 1;
        }
    }
    if (res < 0) {
        return 0;
    }

    return res;
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))