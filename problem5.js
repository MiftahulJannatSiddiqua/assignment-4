// =========== problem-5 ===========
// %%%%%%%%  isBestFriend  %%%%%%%%%

function isBestFriend(person1, person2){
    if(typeof (person1 && person2) == 'object'){
        if((person1.name == person2.friend) && (person2.name == person1.friend)){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return 'Please try with valid object';
    }
}
const person3 = {name:'abul', friend:'babul'};
const person4 = {name:'babul', friend:'abul'};
const fakeOrBestFriend = isBestFriend(person3, person4);
console.log(fakeOrBestFriend);