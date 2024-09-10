const slidingwindow = function(nums,k){
    const res = [];
    const n=nums.length;

    for(let i=0;i<n-k;i++){
        let max=nums[i];
        for(let j=1;j<k;j++){
            if(nums[i+j]>max){
                max = nums[j+i];
            }
        }
        res.push(max);
    }
    return res;
}
console.log(slidingwindow([1,-2,3,4,5,-2,4,5,-6,7,8],3))