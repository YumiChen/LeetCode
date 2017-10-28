// https://leetcode.com/problems/3sum-closest/description/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var sum,difference,
        i,j,k,
        len = nums.length;

    for(i = 0; i < len -2 ; i++){
        for(j = i + 1 ; j < len ; j++){
            for(k = j + 1; k < len; k++){
                if(difference === undefined){
                   difference = Math.abs(target - (nums[i] + nums[j] + nums[k] ));
                    sum = nums[i] + nums[j] + nums[k];
                }
                else if(Math.abs(target - (nums[i] + nums[j] + nums[k] )) < difference){
                    difference = Math.abs(target - (nums[i] + nums[j] + nums[k] ));
                    sum = nums[i] + nums[j] + nums[k];
                }
            }
        }
    }
    return sum;
};