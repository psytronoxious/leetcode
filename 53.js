/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	let maxSum = Number.NEGATIVE_INFINITY;
	let lastMax = Number.NEGATIVE_INFINITY;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > maxSum && maxSum<=0) {
			maxSum = nums[i];
            if (maxSum > lastMax) lastMax = maxSum;
			continue;
		}
		maxSum = maxSum + nums[i];
		if (maxSum > lastMax) lastMax = maxSum;
	}
    if (lastMax > maxSum) return lastMax;
    else return maxSum;
};


console.log(maxSubArray([ -2, 1, -3, 4, -1, 2, 1, -5, 4 ]));
