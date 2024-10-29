// bubble sort
function bubble(arr){
    let n=arr.length;
    let swapped;
    do{
        swapped = false;
        for(let i=0;i<n;i++){
            if(arr[i-1]>arr[i]){
                [arr[i-1],arr[i]] = [arr[i],arr[i-1]];
                swapped = true
            }
        }
        // n--;
    }while(swapped)
    return arr;
}
console.log(bubble([1,3,5,6,3,4,2]))