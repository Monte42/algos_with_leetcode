const merge = (nums1,nums2) => {
    for (i=0; i<nums1.length; i++) {
        console.log(i);
        console.log(nums1[i], nums2[i]);
        console.log();
        if (i == 0 && nums2[0] < nums1[0]) {
            nums1.unshift(nums2[0])
            nums2.shift()
        }
        else if (nums1[i] >= nums2[0]) {
            nums1.splice(i,0,nums2[0])
            nums2.shift()
        }
        if (nums1[nums1.length-1] == 0 ) {
            nums1.splice(nums1.length-1)
        }
    }
    nums1.push(...nums2)
    return nums1
}

// console.log(merge([1,2,3,0,0,0],[2,5,6]));
console.log(merge([4,5,6,0,0,0],[1,2,3]));
