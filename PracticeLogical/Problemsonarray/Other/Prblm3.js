var sortColors = function(nums) {
    let zeros = [];
    let ones = [];
    let twos = [];
  
  
    for (let num of nums) {
      if (num === 0) {
        zeros.push(0);
      } else if (num === 1) {
        ones.push(1);
      } else if (num === 2) {
        twos.push(2);
      }
    }
  
  
    // Concatenate all arrays together to get the sorted array
    const sorted = [...zeros, ...ones, ...twos];
  
  
    // Modify the original nums array
    for (let i = 0; i < nums.length; i++) {
      nums[i] = sorted[i];
    }
  };
  