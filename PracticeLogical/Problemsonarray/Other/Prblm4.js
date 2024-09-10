// Intersection of array
// Naive approach -
var intersection = function(nums1, nums2) {
    arr = [];
    for(let i=0;i<nums1.length;i++){
        for(let j=0;j<nums2.length;j++){
            if(nums1[i]==nums2[j]){
                arr.push(nums1[i])
                break;
            }
        }
    }
   let  unique = [...new Set(arr)]
    return unique
};
// Optimized approach
var intersection = function(nums1, nums2) {
    // Convert nums1 to a set to remove duplicates and allow O(1) lookups
    let set1 = new Set(nums1);
    let resultSet = new Set();


    // Iterate over nums2 and check if the element is in set1
    for (let num of nums2) {
        if (set1.has(num)) {
            resultSet.add(num); // Add to result set to avoid duplicates
        }
    }


    // Convert the result set back to an array
    return Array.from(resultSet);
};
