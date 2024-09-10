// count the frequency of each element in an array 
// Given the array:
// [1, 2, 2, 3, 3, 3, 4]

// The frequency of 1 is 1 (it appears once).
// The frequency of 2 is 2 (it appears twice).
// The frequency of 3 is 3 (it appears three times).
// The frequency of 4 is 1 (it appears once).

function findFrequency(arr) {
    var frequencyMap = {};
    for(let i=0;i<arr.length;i++){
        let element = arr[i];
        if(frequencyMap[element]){
            frequencyMap[element]++;
        }
        else{
            frequencyMap[element]=1
        }
    }
    return frequencyMap;
}

console.log(findFrequency([1, 2, 2, 3, 3, 3, 4]));
