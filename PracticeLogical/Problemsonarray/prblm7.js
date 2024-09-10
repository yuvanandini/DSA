// calculate the sum of the elements of the array 

function arrsum(arr){
    var sum = 0;
    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i]
    }
    return sum;
}
console.log(arrsum([1,2,3,4]))