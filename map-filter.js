var numbers = [2,3,4,5,6,7,8,9];
 
const newNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const sqr = element * element;
    newNumbers.push(sqr);
}
console.log(newNumbers);



const square = numbers.map(function(element){
    return element * element;
})
console.log(square);




function result(element){
    return element * element;
}

const square = numbers.map(result);
console.log(square);


const result = element => element * element;
const square = numbers.map(result);
console.log(square);


const square = numbers.map(element => element * element);
console.log(square);


const square = numbers.map(x => x* x);
console.log(square);


const resultSheet = [88,99,78,96,55,66,77];


const result = resultSheet.map(x =>{const minus = x -10; const sqr = minus * minus; return sqr;});
console.log(result);


const result = resultSheet.filter(x => x > 80);
console.log(result);


const result = resultSheet.find(x => x > 80);
resultSheet.push(result)
console.log(resultSheet);


console.log(result);
