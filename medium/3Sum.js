// https://leetcode.com/problems/3sum/description/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var ans = [],i,j,k,
        len = nums.length,result;

    for(i = 0; i < len -2 ; i++){
        for(j = i+1 ; j < len ; j++){
            for(k = j + 1; k < len; k++){
                if((nums[i] + nums[j] + nums[k]) === 0){
                    result = [nums[i],nums[j],nums[k]].sort();
                    ans.push(result);
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