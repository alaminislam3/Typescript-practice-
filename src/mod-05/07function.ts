// arrow function
// normal function
// object => function => method
function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(2, 2);

const arrowAdd = (num1: number, num2: number): number => {
  return num1 + num2;
};

arrowAdd(5, 6);
// object => function => method
const poorUser = {
  name: "alamin",
  balance: 0,
  addBalance(value: number): number {
    const totalBalace = this.balance + value;
    return totalBalace;
  },
};
poorUser.addBalance(10000);
// console.log()


const arr : number [] = [1,5,7,9]

const newArr = arr.map((index : number) : number => index * index)

// console.log(newArr)


// const poorUser2 = {
//   name : "alamin",
//   age : 27,
//   balance : 0,
//   addBalance (value : number) : number{
//     const totalBalance = this.balance + value
//     return totalBalance
//   }
// }
// poorUser2.addBalance(5000)
// console.log(poorUser2)