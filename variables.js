 
 function test(){
    let a=10;
    if(true){
        let a = 20;
        console.log(a);
    }
   console.log(a);
 }
 test()

//  var with let is possible for shadowing but vise is not workout 
// redeclare - var ~ let and const ; reinialize - var, let ~ cont 

// map , filter and reduce  
const arr=[1,2,3,4,5] 
const res = arr.map((value, i, array)=> value*2+i)

// which filter the array based on condition if it satify the tru value will push on the new arr 
const nums = [1,2,3,4]
const filters= nums.filter((v,i,a)=>{return v>2})
console.log(filters)

// reduce method reduces the array of elemenets doen to single value. 
const n = [1,2,3,4,5] 
const sum = n.reduce((acc,curr,i,a)=>{return acc+curr},0)
console.log(sum)

// polyfill for map() 
Array.prototype.map = function(cb) {
    temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i],i,this))
    }
    return temp;
}

const mapNum = [1,2,3,4,5] 
const mapres = mapNum.map((n, i, a)=>{return n*2})
console.log(mapres)

// polyfill for filter 
Array.prototype.filter = function(cb) {
    temp = [];
    for (let i = 0; i < this.length; i++) {
       if (cb(this[i],i,this)) temp.push(this[i]);
    }
    return temp;
}

const fitNum = [1,2,3,4,5,6];
const filterRes = fitNum.filter((v,i,a)=>{return v>4});
console.log(filterRes)

// polyfill for reduce 
// arr.reduce((acc,curr,i,a)=>{acc+curr},initial value)
Array.prototype.reduce = function(cb, initialvalue) {
    var accumulator = initialvalue;
    for (let i = 0; i < this.length; i++) {
       accumulator = accumulator ? cb(accumulator,this[i],i,this):this[i]; 
    }
    return accumulator;
}

const redN = [1,2,4,5,6,7] ;
const resu = redN.reduce((acc,curr,i,a)=>{return acc+curr},0);
console.log(resu)

// map vs foreach 
const mp = [1,2,3,4,5];
const mpr = mp.map((v)=>{return v+1});
console.log(mp)

const numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num * 2)); 
// Output: 2, 4, 6, 8 (prints each doubled value)
console.log(numbers); // Output: [1, 2, 3, 4] (original array remains unchanged)
