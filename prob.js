// function radianToDegree(radian) {
//     if (typeof radian === 'number') {
//         const degree = radian * 180 / Math.PI;
//         return degree.toFixed(2);
//     } else {
//         return "Please input a valid Number!";
//     }
// }
// var givenRadian = radianToDegree();
// console.log(givenRadian);
function oilPrice(disel, petrol, octane) {
    if (typeof (disel && petrol && octane) === 'number') {
        let diselPrice = disel * 114;
        let petrolPrice = petrol * 130;
        let octanePrice = octane * 135;
        let totalPrice = diselPrice + petrolPrice + octanePrice;
        return totalPrice;
    }
    else {
        return "Please input Quantity";
    }
}
let total = oilPrice(5, 5, 4);
console.log(total);
// function oilPrice(disel, petrol, octane) {
//     if (typeof disel === 'number' && typeof petrol === 'number' && typeof octane === 'number') {
//         let diselPrice = disel * 114;
//         let petrolPrice = petrol * 130;
//         let octanePrice = octane * 135;
//         let totalPrice = diselPrice + petrolPrice + octanePrice;
//         return totalPrice;
//     }
//     else {
//         return "Please input Quantity";
//     }
// }
// let total = oilPrice(5, 5, 4);
// console.log(total);