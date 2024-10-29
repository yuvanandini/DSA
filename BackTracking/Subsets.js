function subsets(nums) {
    const result = [];
    
    // dfs function for permutations 
    const dfs = (i, nums, slate) => {
        // base case 
        if(i===nums.length){
            result.push(slate.slice())
            return;
        }
        
        // dfs recursive case 
        
        // exclude 
        dfs(i+1, nums, slate)

        // include
        slate.push(nums[i])
        dfs(i+1,nums,slate)
        slate.pop()
    }
    dfs(0,nums, []);
    return result
}


