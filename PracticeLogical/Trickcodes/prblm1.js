// summ of all digits of a number is even or odd 

function sumEorO(num){
    var sum = 0;
    var digits = num.toString().split('')
    for(let i of digits){
        sum = sum + parseInt(i);
    }

    if((sum&1)===0){
        return "even";
    }
    else{
        return "odd";
    }
}
console.log(sumEorO(33))

// for loop
var arr= [1,2,3,4,5]
var result=[];
function forloop(arr){
    for(let i=0;i<arr.length;i++){
        op =  parseInt(arr[i]+1)
        result.push(op)
    }    
    return result
}
console.log(forloop(arr));

// while loop 
let num=0
while(num<arr.length){
    var res = arr[num]+1;
    num++;
}
console.log(res)