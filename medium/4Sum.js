// https://leetcode.com/problems/4sum/description/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var ans = [],i,j,k,l,
        len = nums.length,result;

    for(i = 0; i < len -2 ; i++){
        for(j = i+1 ; j < len ; j++){
            for(k = j + 1; k < len; k++){
                for(l = k + 1; l < len; l++){
                    if((nums[i] + nums[j] + nums[k] + nums[l]) === target){
                        result = [nums[i],nums[j],nums[k],nums[l]].sort();
                        ans.push(result);
                    }
                }
            }
        }
    }
    // check if there's duplicate
    ans = ans.map(JSON.stringify).filter(function (e, i, a) {
        return a.indexOf(e, i+1) === -1;
    }).map(JSON.parse);
    return ans;
};