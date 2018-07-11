// https://leetcode.com/problems/move-zeroes/description/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let counter = 0;
    for(let i = 0;i < (nums.length-counter) ; i++){
        if(nums[i] === 0){
            nums.push(nums.splice(i, 1)[0]);
            i--;
            counter++;
        }
    }
};