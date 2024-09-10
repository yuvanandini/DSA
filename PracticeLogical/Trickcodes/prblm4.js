// palindrome of a number 
// 1221 
function reversedNum(num){
    const reverse = num.toString().split('').reverse().join('')
    const final = parseInt(reverse)
    if(num === final){
        return "palindrome"
    }
    else {
        return "not a palindrome"
    }
}
console.log(reversedNum(12214))

// palindrome of a string 
function palindromeString(s){
    var reversed = '';
    for(let char of s){
        reversed = char + reversed;
    }
    if(s === reversed){
        return "string is palindrome"
    }
    else{
        return "string is not palindrome"
    }
}
console.log(palindromeString("abcddcbae"))

// Two pointer technique 
function isPalindrome(s) {
    
    let start = 0;
    let end = s.length - 1;

    while(start < end) {
        if (s[start] !== s[end]) {
            return false;    
        } else {
            start++;
            end--;
        }
    }
    
    return true;
}
console.log(isPalindrome('abcbae'))

// every loop 
function isPalindrome(num) {
    // Convert the number to a string and split it into an array of characters
    const numStr = num.toString().split('');
  
    // Check if the number is a palindrome
    return numStr.every((digit, index) => {
      // Map through each digit and check if it's the same from both ends
      return digit === numStr[numStr.length - 1 - index];
    });
  }
  
  console.log(isPalindrome(121));  // true
  console.log(isPalindrome(123));  // false
  console.log(isPalindrome(1331)); // true
  console.log(isPalindrome(12321)); // true
  
