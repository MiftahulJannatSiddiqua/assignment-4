// ==============problem-1==========
function radianToDegree(radian){
    if(typeof radian=='number'){
        degree = radian*(180/Math.PI);
        return degree.toFixed(2);
    } 
    else{
        return 'please try with a valid number!';
    }  
}
let radianAndDegree= radianToDegree(10);
console.log(radianAndDegree);
