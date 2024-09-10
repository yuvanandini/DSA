// find the average of all elements in an array 
// To find the average of all elements in an array, follow these steps:

// Sum All Elements: Compute the sum of all elements in the array.
// Calculate the Average: Divide the sum by the number of elements in the array.

function avgarr(arr){
    var n = arr.length;
    var sum=0;
    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    return Math.floor(sum/n)
}
console.log(avgarr([1,2,3,4,5]))