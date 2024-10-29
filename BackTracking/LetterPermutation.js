var letterCasePermutation = function(s) {
    const result = [];
    
    // DFS function to explore permutations
    const dfs = (i, s, slate) => {
        // Base case: if we've processed the entire string
        if (i === s.length) {
            result.push(slate.join(''));
            return;  // Stop further execution once base case is reached
        }
        
        // Recursive case
        let char = s[i];
        
        // If the character is a letter (not a number)
        if (isNaN(char)) {
            // Try uppercase
            slate.push(char.toUpperCase());
            dfs(i + 1, s, slate);
            slate.pop(); // Backtrack
            
            // Try lowercase
            slate.push(char.toLowerCase());
            dfs(i + 1, s, slate);
            slate.pop(); // Backtrack
        } else {
            // If the character is a number, add it without any changes
            slate.push(char);
            dfs(i + 1, s, slate);
            slate.pop(); // Backtrack
        }
    };
    
    dfs(0, s, []);
    return result;
};

console.log(letterCasePermutation("a1b"));
// Output: ["A1B", "A1b", "a1B", "a1b"]


var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return left;
};
console.log(searchInsert([1,2,3,5,6],4))

function CountNegPos(a){
    var p= 0, n =0;
    // var res = []
    for(let i=0;i<a.length;i++){
        if(a[i]<0)  n++
        else  p++
    }
   return n>p?n:p;
}
console.log(CountNegPos([-1,-2,-3,1,2,3]))

