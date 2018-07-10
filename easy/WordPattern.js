// https://leetcode.com/submissions/detail/162410495/
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    str = str.split(" ");
    if(str.length !== pattern.length) return false;
    
    let result = true, reference = {};
    
    for(let i = 0; i < str.length ;i++){
        if(!reference[pattern[i]] && Object.values(reference).every(data=>(data!==str[i]))) reference[pattern[i]] = str[i];
        else if(reference[pattern[i]] !== str[i]){
            result = false;
            break;
        }
    }
    
    return result;
};