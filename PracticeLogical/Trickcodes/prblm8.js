// check if two strings are palindrome or not 
// means both the having the same number of charecters to create a new word 

// anagram('coding money', 'money coding') => true 
// anagram('RAIL! SAFETY', 'fairy tales') =>true
// anagram('hello there', "hii there") => false

// str1 = "coding money"
// str2 = "money coding"
// sort the string of both if both having same charecters and length then its anagram

function anagram(str1,str2){
    const Nstr1 = str1.replace(/\s/g,'').split('').sort().join('');
    const Nstr2 = str2.replace(/\s/g,'').split('').sort().join('');
    if(Nstr1===Nstr2){
        return "anagram"
    }
    return false;
}
console.log(anagram("coding money","money coding"))