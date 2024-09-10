// Find smallest element in an array 

function smallest(arr){
    var min=arr[0];
    for(let i=0;i<arr.lenght;i++){
        if(arr[i]<min){
            min = arr[i];
        }
    }
    return min;
}
console.log(smallest([1,2,3,4,5]))

// second approach
var arr1=[5,6,7,1,3];
res = arr1.sort();
console.log(res[0])

const numbers = [34, 7, 23, 32, 5, 62];
numbers.sort((a,b)=>a-b)
console.log(numbers)


