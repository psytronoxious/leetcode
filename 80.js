/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	let j = 0;
	let count = 0;
	while (j < nums.length) {
		if (nums[j - 1] === nums[j]) {
			if (count===1){
				nums.splice(j, 1);
			}else{
				count = 1
				j++
			}
		} else {
			count = 0
			j++
		};
	}
	return nums.length;
};

console.log(removeDuplicates([1,1,1,2,2,3]));
