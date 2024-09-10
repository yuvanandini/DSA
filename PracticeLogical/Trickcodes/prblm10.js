// write a program that console logs the numbers from 1 to n. But for multiples of three prints fizz, multiples of 5 prints buzz and for multiples of 3 and 5 prints fizzbuzz
// fizbuzz(5);
// 1
// 2
// fizz
// 3
// 4
// buzz

function fizzbuzz(n){
    let res = [];
    for(let i=1;i<=n; i++){
        if(i%3===0)  res.push('fizz')
        else if(i%5===0)  res.push('buzz')
        else if(i%3===0 && i%5===0) res.push('fizzbuzz')
        else res.push(i)
    }
    return res
}
console.log(fizzbuzz(5))

