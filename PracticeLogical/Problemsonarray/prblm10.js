// find the median of the given array 
function median(arr){
    var n=arr.length;
    var median = Math.abs(n/2)
    return arr[median];
}
console.log(median([1,2,4,5,6,7]))