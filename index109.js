function solution(number){
    if (number < 1 || number > 3999) {
        return "Number out of range (1-3999)";
    }

    const romanNumerals = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ["", "M", "MM", "MMM"]
    ];

    const roman = [];
    roman.push(romanNumerals[3][Math.floor(number / 1000) % 10]); // Thousands
    roman.push(romanNumerals[2][Math.floor(number / 100) % 10]); // Hundreds
    roman.push(romanNumerals[1][Math.floor(number / 10) % 10]);  // Tens
    roman.push(romanNumerals[0][number % 10]);                    // Ones

    return roman.join("");
}