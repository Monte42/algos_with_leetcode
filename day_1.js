var runningSum = function(nums) {
    for(let i=1;i<nums.length;i++){
        nums[i] = nums[i] + nums[i-1]
    }
    return nums
};
// runningSum([1,2,3,4])

var pivotIndex = function(nums) {
    let left = 0
    let right = 0
    for (let n in nums) right += nums[n]
    for (let i=0; i<nums.length; i++){
        if (left === right - left - nums[i]) return i
        left += nums[i]
    }
    return -1
};
// console.log(pivotIndex([1,7,3,6,5,6]));
// console.log(pivotIndex([1,2,3]))
// console.log(pivotIndex([2,1,-1]))
