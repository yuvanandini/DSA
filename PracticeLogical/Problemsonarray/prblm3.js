// find the large and small element in an array 

numbers = [45,56,76,23,12,23];
numbers.sort((a,b)=>a-b)
console.log(numbers[1],numbers[numbers.length-2])

// find second small and second large in an array 
function maxandmin(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return console.log(arr[1],arr[arr.length-2])
}
maxandmin([23,12,45,43,64,76])

