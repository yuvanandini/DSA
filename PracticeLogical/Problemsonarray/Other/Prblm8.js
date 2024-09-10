function checkSortedAndRotated(arr) {
    let count = 0;
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        if (arr[i] < arr[i - 1]) {
            count++;
        }
    }

    // Check if the array wraps around
    if (arr[n - 1] > arr[0]) {
        count++;
    }

    // If count is at most 1, the array is sorted and rotated
    return count <= 1;
}

// Example usage:
console.log(checkSortedAndRotated([3, 4, 5, 1, 2])); // Output: true
console.log(checkSortedAndRotated([1, 2, 3, 4, 5])); // Output: true (sorted but not rotated)
console.log(checkSortedAndRotated([2, 1, 3, 4, 5])); // Output: false
console.log(checkSortedAndRotated([2, 3, 4, 5, 1])); // Output: true

