function findEvenIndex(arr)
{
    for (let i = 0; i < arr.length; i++) {
        const leftSum = arr.slice(0, i).reduce((sum, num) => sum + num, 0);
        const rightSum = arr.slice(i + 1).reduce((sum, num) => sum + num, 0);
        if (leftSum === rightSum) {
            return i;
        }
    }
    return -1;

}