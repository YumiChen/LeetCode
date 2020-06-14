/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    const dict = {};
    nums.sort((a, b)=>(a - b));
    let maxLength = 0;
    let resultIndex = 0;
    
    for(let i = 0;i < nums.length; i++){    
        dict[i] = new Set([nums[i]]);
        for(let j = i - 1; j >= 0; j--){ // check bigger numbers first
            if(j < 0) break;
            if(nums[i] % nums[j] === 0 && (new Set([nums[i], ...dict[j]]).size > dict[i].size)){
                dict[i] = new Set([nums[i], ...dict[j]]); 
            }
        }    
        
        if(dict[i].size > maxLength){
            maxLength = dict[i].size;
            resultIndex = i;
        }
    }
    
    return dict[resultIndex]?Array.from(dict[resultIndex]):[];
};

/* Cases:
1.
Input: [1,2,3]
Output: [1,2] (of course, [1,3] will also be ok)

2.
Input: [4, 8, 10, 240]
Output: [4, 8, 240]

3.
Input: [1]
Output: [1]

4.
Input: []
Output: []
*/