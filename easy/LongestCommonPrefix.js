// https://leetcode.com/problems/longest-common-prefix/description/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs[0]) return "";
    let result = strs[0];
    
    strs.forEach(str=>{
        for(let i = 0;i < result.length;i++){
            if(str[i] !== result[i]){
                result = result.slice(0, i);
                break;
            }
        }
    })
    
    return result;
};