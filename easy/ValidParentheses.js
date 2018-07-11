// https://leetcode.com/problems/valid-parentheses/
// 388 ms
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let temp = [];
    for(let i = 0;i < s.length; i++){
        switch(s[i]){
            case "[":
            case "(":
            case "{":
                temp.unshift(s[i]);
                break;
            case "]":
                if(temp[0] !== "[") return false;
                else temp.shift();
                break;
            case ")":
                if(temp[0] !== "(") return false;
                else temp.shift();
                break;
            case "}":
                if(temp[0] !== "{") return false;
                else temp.shift();
                break;
                   
        }
    }
    
    return temp.length === 0;
};