const bonus = 2000;

function selami(mama, baba){
    // console.log(bonus);
    const total = mama + baba + bonus;
    if (total > 3000) {
        var felling = "Happy";
        felling = "Very Happy";
        felling = "Very Very Happy";
        console.log(felling);
    }
    // console.log(total);
    // console.log(felling); not access able because it's local or block scope variable;
    console.log(felling); // You can access you felling variable declare by var; it hoisting variable
    return total;
}

var output = selami(500,1000)
// console.log(total); total not able to access local or block scope
// console.log(bonus); // bonus variable access form anywhere
console.log(output);



console.log(name);
console.log(name2);
var name = "Sarowar"; //result undefined //var hoisting the declaration part not value or properties
const name2 = "Hosen"; //can not access before initialization
