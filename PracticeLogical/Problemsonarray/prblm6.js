// rearrange the array in increasing-decreasing order 

const arr =[1,2,3,4,8,7,6]
function rearrange(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]<arr[j+1]){
                let temp = arr[j];
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    return arr;
}
console.log(rearrange(arr))