// =========== problem-1 ===========
// %%%%%%%% radianToDegree %%%%%%%%%

function radianToDegree(radian){
    if(typeof radian=='number'){
        const degree = radian*(180/Math.PI);
        return degree.toFixed(2);
    } 
    else{
        return 'please try with a valid number!';
    }  
}
const radianAndDegree= radianToDegree(10);
console.log(radianAndDegree);
