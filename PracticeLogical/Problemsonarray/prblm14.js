function repeating(arr) {
    var frequencyMap = {};
    var res = [];
    var non = [];

    // Create a frequency map
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (frequencyMap[element]) {
            frequencyMap[element]++;
        } else {
            frequencyMap[element] = 1;
        }
    }

    // Find repeating elements
    for (let key in frequencyMap) {
        if (frequencyMap[key] > 1) {
            res.push(Number(key)); // Push the key as a number
        }
        else {
           non.push(Number(key)) 
        }
    }

    return non;
}

console.log(repeating([1, 2, 3, 1, 2, 4, 5, 6])); // Output: [1, 2]
