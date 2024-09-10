// given an array and chuck size you need to divide array into sub array in chuck size 
// ([1,2,3,4,5,6,7],2) => [[1,2],[3,4],[5,6],7]

function chunkArr(arr, chunk) {
    const res = []; // Initialize result array

    // Loop through the array and slice it into chunks
    for (let i = 0; i < arr.length; i += chunk) {
        const subArray = arr.slice(i, i + chunk); // Slice the array in chunks
        res.push(subArray); // Push each chunk into the result
    }

    return res;
}

console.log(chunkArr([1, 2, 3, 4, 5, 6, 7], 2));
// Output: [[1, 2], [3, 4], [5, 6], [7]]
