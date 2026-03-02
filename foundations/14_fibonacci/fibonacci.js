const fibonacci = function(num) {
    const index = Number(num);
    
    if(index < 0) {
        return "OOPS";
    }else if(index == 0) {
        return 0;
    }

    let [prev, current] = [0, 1];

    for(let i = 2; i <= index; i++) {
        let fiboNum = prev + current;
        prev = current;
        current = fiboNum;
    }
    
    return current;
};



// Do not edit below this line
module.exports = fibonacci;
