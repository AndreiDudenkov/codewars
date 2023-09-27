function printerError(s) {
    const regex = /^[a-m]$/i;
    let error = s.split('').filter(el => !regex.test(el));
    return error.length + '/' + s.length;
}