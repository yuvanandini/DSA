// remove duplicates from an unsorted array 

function remdup(arr){
    arr = arr.sort((a,b) => a-b)
    arr = [...new Set(arr)]
    console.log(arr);
}
remdup([4,5,6,6,2,3,1,2,3]);