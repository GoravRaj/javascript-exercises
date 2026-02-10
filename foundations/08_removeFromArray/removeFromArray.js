const removeFromArray = function(arr, ...toBeRemoved) {
    return arr.filter((item) => {
        for(let i = 0; i < toBeRemoved.length; i++) {
            if(item === toBeRemoved[i]) {
                return false;
            } 
        }  
        return true;   
    });
};


// Do not edit below this line
module.exports = removeFromArray;
