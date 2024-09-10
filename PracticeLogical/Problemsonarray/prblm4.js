// Reverse an given arrray 

// [1,2,3,4,5,6] => [6,5,4,3,2,1]

// inbuit
const arr = [1,5,3,4,5,6];
arr.reverse();
console.log(arr);

function arrrev(nums){
    for(let i=0;i<nums.length; i++){
        for(let j=0;j<nums.length-i-1;j++){
            // swap the elements 
            let temp = nums[j];
            nums[j]=nums[j+1];
            nums[j+1]=temp
        }
    }
    return nums;
}
console.log(arrrev([1,2,3,4,5,6]))