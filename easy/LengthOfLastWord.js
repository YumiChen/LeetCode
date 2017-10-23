// https://leetcode.com/problems/length-of-last-word/description/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var newArr = [];
    s = s.split(" ");
    s.forEach(function(str){
        if(str != "") newArr.push(str);
    });
    if(newArr.length > 0) return newArr[newArr.length-1].length;
    return 0;
};

// input "" or " "
// get 0

// input "a  b   "
// get 1