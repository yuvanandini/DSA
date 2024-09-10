var moveZeroes = function(arr) {
    let arr2 = []; // Array to store zeros
    let arr3 = []; // Array to store non-zero elements
            var index=0;


    for (let i = 0; i < arr.length; i++) {


        if (arr[i]!= 0) {
            arr[index]=arr[i];
            index++;
        }
    }


    for(let i=index; i<arr.length;i++){
        arr[i]=0
    }


};
