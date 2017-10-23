// Determine whether an integer is a palindrome

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString();
    var len = x.length, 
        half = Math.floor(len/2),
        index = 0;
    for(index; index < half;index++){
        len--;
        if(x[len] != x[index]){
           return false;
        }
    }
    return true;
};