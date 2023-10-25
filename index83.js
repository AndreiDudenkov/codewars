class Class {
    static count = 0;

    static getNumber = () => {
        if (Class.count === 0) {
            Class.count++;
            return 1;
        } else {
            const previousValue = 2 ** (Class.count - 1);
            Class.count++;
            return previousValue * 2;
        }
    };
}