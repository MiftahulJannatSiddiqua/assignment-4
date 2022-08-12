// ============= problem-2 =============
// %%%%%%%%% isJavaScriptFile %%%%%%%%%%

function isJavaScriptFile(String){
    if(typeof String == 'string'){
        const fileName = String.endsWith('.js');
        return fileName;
    }
    else{
        return 'please try with file name!';
    }
}
const nameOfFile = isJavaScriptFile('index.js');
console.log(nameOfFile);