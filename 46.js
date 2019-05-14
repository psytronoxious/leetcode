/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function factorial(x) {
	if (x === 0) return 1;
	return x * factorial(x - 1);
}

var permute = function(nums) {
	if(nums.length===0) return [];
	let final = [[nums[0]]];
	for (let i = 1; i < nums.length; i++) {
		let temp = []
		for(let j=0; j<final.length; j++){
			for(let k=0; k<=final[j].length; k++){
				let t  = Array.from(final[j])
				t.splice(k, 0, nums[i])
				temp.push(Array.from(t))
			}
		}
		final = Array.from(temp)
	}
	return final;
};

console.log(permute([ 1, 2, 3, 4 ]));
