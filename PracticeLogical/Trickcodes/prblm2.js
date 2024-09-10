// reverse an string 
// hello => ollhe 

var str = "hellohii"
var reversed = '';
for(let i=0;i<str.length;i++){
    reversed =  str[i] + reversed
}
console.log(reversed)

// for of loop 
function reverse(s){
    const reversedS = '';
    for(let char of str){
        reversedS = char + reversedS
    }
    return reversedS
}
console.log(reverse("HelloCoder"));


