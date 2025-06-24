class Solution {
	/** 
	 * @param {number} n
	 * @return {number}
	 */
	subtractProductAndSum(n) {
		// Your code goes here
	let str = n.toString().split("");
	let multiply = str.reduce((a,b) => parseInt(a)*parseInt(b))
	let sum = str.reduce((a,b)=> parseInt(a)+parseInt(b))
	return multiply - sum;
	}
};



