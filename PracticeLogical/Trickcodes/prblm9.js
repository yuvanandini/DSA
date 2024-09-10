// write a function that returns the number of vowels used in a string. vowela are a, e, i, o, u , A, E, I, O, U

function vowels(str){
    let countVowels = 0;
    for(let char of str){
        if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'||char==='A'||char==='E'||char==='I'||char==='O'||char==='U'){
            countVowels++;
        }
    }
    return countVowels;
}
console.log(vowels('hi there'))

// buit in 
function vowel(string){
   const matches =  string.match(/[aeiou]/gi)
   return matches ? matches.length : 0
}
console.log(vowel("returing vowels"))

// third appraoch 
function third(s){
    const checkmatch= ['a','e','i','o','u'];
    let count=0;
    for(let char of s.toLowerCase()){
        if(checkmatch.includes(char)){
            count++
        }
    }
    return count 
}
console.log(third('AeioUr'));