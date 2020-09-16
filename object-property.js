const student = [
    {id: 24, name: "Sarowar"},
    {id:25, name: "Mamun"},
    {id: 26, name: "Hasan"},  
    {id: 48, name: "Abdul Kuddus"},  
    {id: 66, name: "Abul Hossain"},  
]


// const names = [];
// for (let i = 0; i < student.length; i++) {
//     const element = student[i];
//     objectNames = element.name;
//     names.push(objectNames)
// }
// console.log(names);

const names = student.map(s => s.name);
const ids = student.map(s => s.id);
const biggerIds = student.filter(s => s.id >40);
// console.log(names);
// console.log(ids);
console.log(biggerIds);