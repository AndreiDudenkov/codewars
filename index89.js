function deleteNth(arr,n){
    const frequency = new Map();
    const newList = [];

    for (const num of arr) {
        if (frequency.has(num)) {
            if (frequency.get(num) >= n) {
                continue;
            }
            frequency.set(num, frequency.get(num) + 1);
        } else {
            frequency.set(num, 1);
        }
        newList.push(num);
    }

    return newList;
}