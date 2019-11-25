// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

const moveZeros = (nums) => {
    for (let i = nums.length-1; i>=0; i--) {
        if(nums[i] === 0) {
            temp = nums.splice(i, 1);
            nums.push(temp[0]);
        }
    }
    return nums
}
console.log(moveZeros([0,0,1]))