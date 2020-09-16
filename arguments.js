var sum = 0;
function add(num1, num2){
    const args = [...arguments]
    for (let i = 0; i < args.length; i++) {
        const element = args[i];
        sum = sum + element;
    }
    return sum;
}
const result = add(10,20,40);
console.log(result);