class Solution {
	/** 
	 * @param {number[]} nums
	 * @return {number[]}
	 */
	removeDuplicates(nums) {
		// Your code goes here
        for(var i = 0;i<nums.length;i++){
            for(var j=nums.length; j>=i+1;j--){
                if(nums[i] == nums[j]){
                    nums.splice(i,1)
                }
            }
        }
        return nums;
}
}
