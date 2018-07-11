// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i = 0;i < nums.length ; i++){
        for(let j=i+1; j < nums.length ;j++){
            if(nums[i] === nums[j]){
                nums.splice(j, 1);
                j--;
            }
        }
    }
    
    return nums.length;
};