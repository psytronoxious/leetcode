/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
	if (nums.length < 3) return [];
	nums.sort();
	// console.log(nums);
	let final = [];
	let keeper = {};
	let uniqueEntries = new Map();
	let uniques = [];
	for (let i = 0; i < nums.length; i++) {
		if (uniqueEntries.has(nums[i])) {
			uniqueEntries.set(nums[i], uniqueEntries.get(nums[i]) + 1);
		} else {
			uniqueEntries.set(nums[i], 1);
			uniques.push(nums[i]);
		}
	}
	// console.log(uniqueEntries);
	let keys = uniqueEntries.keys();
	for (var key of keys) {
		if(key===0){
			if(uniqueEntries.get(key)>2){
			}else continue;
		}
		if (uniqueEntries.get(key) > 1 && uniqueEntries.has(key * -2)) {
			let arr = [ key, key, -2 * key ];
			arr.sort();
			if (!(arr.join('') in keeper)) {
				final.push(arr);
				keeper[arr.join('')] = 1;
			} else keeper[arr.join('')] = 1;
		}
	}
	// console.log(uniques);
	for (var i = 0; i < uniques.length; i++) {
		for (var j = i+1; j < uniques.length-1; j++) {
			if (uniqueEntries.has(-1 * (uniques[i] + uniques[j]))) {
				let arr = [ uniques[i], uniques[j], -1 * (uniques[i] + uniques[j]) ];
				arr.sort();
				if(uniques[i]!== -1 * (uniques[i] + uniques[j]) && uniques[j]!==-1 * (uniques[i] + uniques[j])){
					if (!(arr.join('') in keeper)) {
						final.push(arr);
						keeper[arr.join('')] = 1;
					} else {
						keeper[arr.join('')] = 1;
					}
				}
				
			}
		}
	}
	return final;
};

console.log(threeSum([-13,5,13,12,-2,-11,-1,12,-3,0,-3,-7,-7,-5,-3,-15,-2,14,14,13,6,-11,-11,5,-15,-14,5,-5,-2,0,3,-8,-10,-7,11,-5,-10,-5,-7,-6,2,5,3,2,7,7,3,-10,-2,2,-12,-11,-1,14,10,-9,-15,-8,-7,-9,7,3,-2,5,11,-13,-15,8,-3,-7,-12,7,5,-2,-6,-3,-10,4,2,-5,14,-3,-1,-10,-3,-14,-4,-3,-7,-4,3,8,14,9,-2,10,11,-10,-4,-15,-9,-1,-1,3,4,1,8,1]).length);
// console.log(threeSum([-1,0,1,2,-1,-4]));
// console.log(threeSum([-1,0,1,0]));
// console.log(threeSum([1,2,-2,-1]));
// console.log(threeSum([ 0, 0, 0 ]));
// console.log(threeSum([ -4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6 ]));
//[ -2, -2, -2, -4, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6 ]
//[[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]]
