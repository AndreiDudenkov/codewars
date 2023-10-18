function calculateYears(principal, interest, tax, desired) {

    let years = 0;

    while (principal < desired) {
        const interestEarned = principal * interest;
        const taxPaid = interestEarned * tax;
        principal += interestEarned - taxPaid;
        years++;
    }

    return years;
}