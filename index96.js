function getSum(a, b)
{
    const numTerms = Math.abs(b - a) + 1;
    const sum = (numTerms * (a + b)) / 2;

    return sum;
}