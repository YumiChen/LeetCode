/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var nums = nums1.concat(nums2),
        fullen = nums.length,
        len = Math.floor(fullen/2);
    nums.sort(function(a, b){return a-b});
    if((fullen%2)!=0) return (nums[len]);
    return (nums[len-1] + nums[len])/2;
};

// input [1,2],[3]
// get 2.0000