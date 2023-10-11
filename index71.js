function queueTime(customers, n) {
    const tills = new Array(n).fill(0);

    for (let i = 0; i < customers.length; i++) {
        const minTimeTill = tills.indexOf(Math.min(...tills));
        tills[minTimeTill] += customers[i];
    }

    return Math.max(...tills);
}