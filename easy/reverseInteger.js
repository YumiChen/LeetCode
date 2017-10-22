/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var pre = x>0?1:-1,
        test = Math.pow(2, 31);
    x = (Math.abs(x)).toString();
    x = parseInt(x.split("").reverse().join(""))*pre;
    
    if(x > (test -1) || x < (test * -1)){
       return 0;
    }
    return x;
};

// input -123
// get -321

// input 123
// get 321

// input 1534236469
// get 0 (result greater than signed 32-bit integer)