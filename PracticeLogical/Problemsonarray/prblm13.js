// add an element in an array 

var arr = [1,2,3,4];
arr.push(5);
console.log(arr)

// without using push 
var arr1 = [1,2,3,4];
var arr2 = [5]
console.log(...arr1 , ...arr2)

var arr2=[1,2,3]
for(let i=arr2.length; i<arr2.length+1;i++){
    arr2[i]=5
}
console.log(arr2)