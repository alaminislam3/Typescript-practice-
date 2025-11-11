import type utils = require("./utils")

/* Function type declere  */
type AddFun = (num1 : number , num2 : number) => number
const add : AddFun = (num1, num2) => num1 + num2

/* Object type declere  (type elieas) */


const user : utils.User = {
    name: "Alamin",
    age : 27,
    isAdmin : true
}

type Name = string 

const name : Name = "sakib"