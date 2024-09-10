// rotate an array by k elements - block swap algorithm 

function rotatearr(arr,k){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<k;j++){
            let temp = arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
    return arr;
}
console.log(rotatearr([1,2,3,4,5,6],3))

// 2nd

function rotate(arr2,k){
    if(k===0) return arr2;
    let rotatepart = arr2.slice(-k);
    let remainingpart = arr2.slice(0,k);
    return rotatepart.concat(remainingpart); 

}
console.log(rotate([1,2,3,4,5,6],3))