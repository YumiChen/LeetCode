// Determine whether an integer is a palindrome

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString();
    var len = x.length, 
        half = Math.floor(len/2),
        index = 0,
        char;
    for(index; index < half;index++){
        len--;
        char = x[len];
        if(char != x[index]){
           return false;
        }
    }
    return true;
};