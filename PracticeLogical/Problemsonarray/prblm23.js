// search for an element in an array 

// Linear Search 
function search(arr, target){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===target){
            target = i
        }
    }
    return target
}
console.log(search([1,2,3,4,5],4))

// Binary search 
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;  // Return the index of the target element
        } else if (arr[mid] < target) {
            left = mid + 1;  // Search in the right half
        } else {
            right = mid - 1;  // Search in the left half
        }
    }
    return -1;  // Return -1 if the target is not found
}

// Example usage:
const sortedArr = [10, 23, 45, 70, 85, 100];
console.log(binarySearch(sortedArr, 70));  // Output: 3
console.log(binarySearch(sortedArr, 25));  // Output: -1 (not found)

