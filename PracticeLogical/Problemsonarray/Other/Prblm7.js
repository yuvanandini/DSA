var rotate = function(nums, k) {
    // Ensure k is within bounds
    k = k % nums.length;

    // Helper function to reverse a portion of the array
    const reverse = (arr, start, end) => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    };

    // Step 1: Reverse the entire array
    reverse(nums, 0, nums.length - 1);

    // Step 2: Reverse the first k elements
    reverse(nums, 0, k - 1);

    // Step 3: Reverse the remaining elements
    reverse(nums, k, nums.length - 1);
};

// Example usage:
const nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 3);
console.log(nums); // Output: [5, 6, 7, 1, 2, 3, 4]

