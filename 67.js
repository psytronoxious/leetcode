/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
	a = a.split('');
	b = b.split('');
	let aLen = a.length;
	let bLen = b.length;
	let minLen = Math.min(aLen, bLen)
	let maxLen = Math.max(aLen, bLen)
	let final = ""
	let iter = 1
	let carry  = '0'
	while(minLen >=  iter){
		if (carry === '1'){
			if(a[aLen -iter]  === '1'  &&  b[bLen -iter] === '1') {
				final = '1' + final 
			} else if (a[aLen -iter]  === '1' || b[bLen -iter] === '1'){
				final = '0' + final 
			}else{
				final = '1' + final
				carry = '0'
			}
		}else{
			if(a[aLen -iter]  === '1' &&  b[bLen -iter] === '1') {
				final = '0' + final
				carry = '1' 
			} else if (a[aLen -iter]  === '1' || b[bLen -iter] === '1'){
				final = '1' + final 
			}else{
				final = '0' + final
			}
		}
		iter ++
	}
	while(maxLen>= iter){
		if (aLen===maxLen){
			if (carry === '1'){
				if(a[aLen -iter] === '1') {
					final = '0' + final 
				} else{
					final = '1' + final
					carry = '0'
				}
			}else{
				if(a[aLen -iter] === '1') {
					final = '1' + final 
				} else{
					final = '0' + final
				}
			}
			iter ++
		}else{
			if (carry === '1'){
				if(b[bLen -iter] === '1') {
					final = '0' + final 
				} else{
					final = '1' + final
					carry = '0'
				}
			}else{
				if(b[bLen -iter] === '1') {
					final = '1' + final 
				} else{
					final = '0' + final
				}
			}
			iter ++
		}
	}
	if (carry === '1') return '1' + final
	return final
};

console.log(addBinary((a = '1'), (b = '111')));
