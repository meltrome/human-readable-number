module.exports = function toReadable (number) {

    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']; 

    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 
    'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    const tys = ['twenty', 'thirty', "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]; 

    let numToStr = number.toString().split('');
    let secondSymbol = numToStr.slice(1, 2);

    if (number >= 0 && number < 10) {return ones[number];}
    if (number > 9 && number < 20) {return teens[numToStr[1]];}

    if (number > 19 && number < 100 && number % 10 === 0) {return tys[numToStr[0] - 2];}
    if (number > 19 && number < 100) {return (`${tys[numToStr[0] - 2]} ${ones[numToStr[1]]}`);}

    if (number === 100) {return "one hundred";}
    if (number > 99 && number % 100 === 0) {return `${ones[numToStr[0]]} hundred`;}
    if (number > 100 && secondSymbol == 0) {
        return `${ones[numToStr[0]]} hundred ${ones[numToStr[2]]}`;
    } 
    if (number > 100 && secondSymbol == 1 && numToStr.length === 3) {
        return `${ones[numToStr[0]]} hundred ${teens[numToStr[2]]}`;
    }
    if (number > 99 && number < 1000 && number % 10 !== 0) {
        return `${ones[numToStr[0]]} hundred ${tys[numToStr[1] - 2]} ${ones[numToStr[2]]}`;
    }
    if (number > 99 && number < 1000 && number % 10 === 0) {
        return `${ones[numToStr[0]]} hundred ${tys[secondSymbol - 2]}`;
    }
};
