const reverseString = function(str) {
    let newarr = [];
    for(let i = str.length - 1; i >= 0; i--) {
        newarr.push(str[i]);
    }
    return newarr.join("");
};


// Do not edit below this line
module.exports = reverseString;
