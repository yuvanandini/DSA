// write a function that accepts a positive interger number N
// the function should console log step shape with N levels make sure the spaces in right side
// n = 3
// '# '
// '## '
// '###'

function stepshape(n){
    for(let row = 1; row <=n; row++){
        let line = '';
        for(let col=1;col<=n;col++){
            if(col<=row){
                line+='#'
            }
            else{
                line+=' '
            }
        }
        console.log(line)
    }
}
console.log(stepshape(3))