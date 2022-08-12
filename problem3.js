// ============== problem-3 =============
// %%%%%%%%%%% radianToDegree %%%%%%%%%%%

function oilPrice(diesel, petrol, octane){
    if (typeof (diesel && petrol && octane) == 'number'){
        const dieselPrice = diesel * 114;
        const petrolPrice = petrol * 130;
        const octanePrice = octane * 135;
        const totalPrice = dieselPrice + petrolPrice + octanePrice;
        return totalPrice;
    }
    else{
        return 'sorry! please try with quantity';
    }
}
const priceOfOil = oilPrice(0, 2, 3);
console.log(priceOfOil);