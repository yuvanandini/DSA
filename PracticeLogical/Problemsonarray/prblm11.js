// remove duplicates from an sorted array 

function remdup(arr){
    var arr = [...new Set(arr)]
    console.log(arr);
}
remdup([1,2,3,1,2,3]);

// without using set 
function rem(arr) {
    var frequencyMap = {};
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        if (!frequencyMap[current]) {
            frequencyMap[current] = true;
        }
    }
    // Convert the keys of the frequency map back to an array
    return Object.keys(frequencyMap).map(Number);
}

console.log(rem([1, 2, 3, 4, 3, 2, 1]));
