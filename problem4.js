// =========== problem-4 ===========
// %%%%%%%% publicBusFare  %%%%%%%%%

function publicBusFare(people){
    if(typeof people == 'number'){
        const busRemaining = people % 50; //bus carry 50 people
        const microBusRemaining = busRemaining % 11; //microBus carry 11 people
        const busFare = microBusRemaining * 250;
        return busFare;
    }
    else{
        return 'you can try with number of people!';
    }
}
const numberOfPeople = publicBusFare(365);
console.log(numberOfPeople);