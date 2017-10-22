/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var index1 = 0, length = nums.length,
        result = [];
    for(index1; index1 < length; index1++){
        var num1 = nums[index1];
        for(var index2 = index1 + 1; index2 < length; index2++){
            if((num1 + nums[index2])==target){
                result.push(index1);
                result.push(index2);
                
                return result;
            }
        }
    }
    return result;
};

// input [3,2,4]
// get [1,2]