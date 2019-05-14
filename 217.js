/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let appeared = new Map();
    for(let i=0; i<nums.length; i++){
        if(appeared.has(nums[i])) return true;
        else appeared.set(nums[i], 1);
    }
    return false;
};

// var containsDuplicate = function(nums) {
//     let appeared = {};
//     for(let i=0; i<nums.length; i++){
//         if(nums[i] in appeared) return true;
//         else appeared[nums[i]] = 1;
//     }
//     return false;
// };