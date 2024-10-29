
const arr=[1,2,3,4,5];

const doubled = arr.map(function(num){
  return num*2
}
)
console.log(doubled)




function add(a,b){
  return a+b;
}
console.log(add(2,3));
console.log(add(2,3));


// Impure function (modifies external state)
let total = 10;

function addToTotal(amount) {
  total += amount; // Modifies an external variable (side effect)
  return total;
}

console.log(addToTotal(5));  // Output: 15
console.log(addToTotal(5));  // Output: 20 (different result due to state change)


// hcf : if both integers having common diviser not leaves any remainder and also 
// 12 , 15 hcf is 3
function hcf(num1, num2){
  var hcf=1;
  for(let i=0;i<Math.min(num1,num2);i++){
    if(num1%i===0 && num2%i===0){
      hcf=i
    }
  }
  return hcf
}
console.log("hcf is" + hcf(12,15))

// count primes 
var countPrimes = function(n) {
  if (n <= 2) return 0; // No primes less than 2

  const isPrime = new Array(n).fill(true);
  isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime numbers

  for (let i = 2; i < n; i++) {
      if (isPrime[i]) {	
          for (let j = i  ; j < n; j += i) {
              isPrime[j] = false; // Mark all multiples of i as not prime
          }
      }
  }

  // Count the number of primes
  let count = 0;
  for (let i = 2; i < n; i++) {
      if (isPrime[i]) count++;
  }

  return count;
};
console.log(countPrimes(5));
