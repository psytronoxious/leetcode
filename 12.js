let mapping = new Map([ [ 1, 'I' ], [ 5, 'V' ], [ 10, 'X' ], [ 50, 'L' ], [ 100, 'C' ], [ 500, 'D' ], [ 1000, 'M' ] ]);
let nums = [ 1000, 500, 100, 50, 10, 5, 1 ];
var intToRoman = function(num) {
	let final = '';
	for (let i = 0; i < nums.length; i++) {
		while (parseInt(num / nums[i]) > 0) {
			num = num - nums[i];
			final = final + mapping.get(nums[i]);
		}
		if (num / nums[i] >= 0.8) {
			if (i % 2) {
				final = final + mapping.get(nums[i + 1]) + mapping.get(nums[i]);
				num = num - (nums[i] - nums[i + 1]);
			} else {
				if (num / nums[i] >= 0.9) {
					final = final + mapping.get(nums[i + 2]) + mapping.get(nums[i]);
					num = num - (nums[i] - nums[i + 2]);
				}
			}
		}
	}
	return final;
};

console.log(intToRoman(48));
console.log(intToRoman(1994));
