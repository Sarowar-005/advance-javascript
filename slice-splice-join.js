const employs = ["Sarowar", "Tuila", "Meraz", "Kolin", "Lhapru", "Usai"];
// const openNewCompany = employs.slice(0,3)
// const retiedEmploys = employs.splice(0,3);
const retiedAndJoinEmploys = employs.splice(0,3, "Sunny", "Leone", "Salman");

// console.log(openNewCompany);
// console.log(retiedEmploys);
console.log(retiedAndJoinEmploys);
console.log(employs);



const numbers = [1,2,3,4,5,6,7];
const join = numbers.join("");
const joinNumber = parseInt(join);
console.log(join);
console.log(joinNumber);
console.log(typeof(joinNumber));
