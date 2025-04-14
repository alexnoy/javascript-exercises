const palindromes = function (string) {
    const strippedString = string.toLowerCase().replaceAll(/[^a-z0-9]/g,'');

    const reversedString = strippedString.split('').reverse().join('')

    return strippedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
