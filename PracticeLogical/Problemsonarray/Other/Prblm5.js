Merge sorted array
Naive sol
var merge = function(nums1, m, nums2, n) {
    let index=0;
    for(i=m;i<nums1.length;i++){
        nums1[i]=nums2[index];
        index++;
    }
    return nums1.sort();
};
Optimized sol
