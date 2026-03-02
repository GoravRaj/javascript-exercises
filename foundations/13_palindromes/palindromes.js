const palindromes = function (str) {
    const validChars = "abcdefghijklmnopqrstuvwxyz1234567890";
    const cleanStr = str.toLowerCase().split("").filter((char) => {
      return validChars.includes(char);
    }).join("");
    const reversed = cleanStr.split("").reverse().join("");
    return cleanStr === reversed;
};

// Do not edit below this line
module.exports = palindromes;
