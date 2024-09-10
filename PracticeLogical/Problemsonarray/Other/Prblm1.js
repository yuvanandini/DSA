// Single number in an array
// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1


var singleNumber = function(nums) {
    let ans = 0;
    for(let num of nums){
        ans = ans^num;
    }
    return ans;
};

