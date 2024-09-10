// find laregest element in array 


numbers = [45,56,76,23,12,23];
numbers.sort((a,b)=>b-a)
console.log(numbers[0])

// 2nd 
function largestele(arr){
    var max = arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max;
}
console.log(largestele([45,56,76,23,12,23]))