/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var longest = 0,
        temp = "",
        length1 = s.length, length2,
        index1 = 0, index2,
        char;
    for(index1; index1 < length1; index1++){
        // check every character in s
        length2 = temp.length;
        char = s[index1];
        if(length2 === 0){
           temp += char;
         }else{
            // check if there's any equal character
            for(index2 = 0; index2 < length2;index2++){
                if(char == temp[index2]) {
                    // there's equal character
                    if(temp.length > longest) longest = temp.length;
                    temp = temp.substring(index2+1);
                    break;
                }
            }
            temp += char;
         }
    }
    if(temp.length > longest) longest = temp.length;
    return longest;
};

// input "abcabcdd"
// get 3