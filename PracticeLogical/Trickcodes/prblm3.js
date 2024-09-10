// reverse a number 

function reversedNum(num){
    const reverse = num.toString().split('').reverse().join('')
     return parseInt(reverse) * Math.sign(num)
}
console.log(reversedNum(-2345))
