// wrie a function that captilizes the given string 
// this is nandini 


function captilize(str){
    const res = [];
    const words = str.split(' ');
    for(let word of words){
     res.push(word[0].toUpperCase() + word.slice(1))
    }
    return res.join(' ');
}
console.log(captilize("this is nandini"))

// Using map function 

function captilizedres(string){
    const slicedStr = string.split(' ');

    return slicedStr.map(word => word[0].toUpperCase()+word.slice(1).join(' '))
}
console.log(captilizedres("hiii this is my first interview"))