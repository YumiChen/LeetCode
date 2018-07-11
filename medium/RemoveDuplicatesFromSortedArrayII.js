// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let counter = 0;
    for(let i = 0;i < nums.length ; i++){
        for(let j=i; j < nums.length ;j++){
            if(nums[i] === nums[j] && counter === 2){
                nums.splice(j, 1);
                j--;
            }else if(nums[i] === nums[j]){
                counter++;
            }
        }
        
        counter = 0;
    }
    
    return nums.length;
};