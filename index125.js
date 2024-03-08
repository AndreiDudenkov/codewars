function comp(array1, array2){

    if (!array1 || !array2) {
        return false;
    }

    if (array1.length !== array2.length) {
        return false;
    }

    for (let i = 0; i < array2.length; i++) {
        let num = Math.sqrt(array2[i])
        const index = array1.indexOf(num);
        if (index !== -1) {
            array1.splice(index, 1);
        }
    }
    return array1.length === 0;
}