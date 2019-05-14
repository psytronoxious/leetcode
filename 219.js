/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let appeared = new Map();
    for(let i=0; i<nums.length; i++){
        if(appeared.has(nums[i])){
            if(i-appeared.get(nums[i])<=k) return true;
        }
        appeared.set(nums[i], i)
    }
    return false;
};