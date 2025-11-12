type User ={
    name : string ,
    age : number 
}
type Role  ={
    role : 'Admin' | "user"
}

// type UserWithRole = User & Role

interface IuserwithRole {
    name : string,
    age : number ,
    // role : string 
}


// interface : onject type : array , object , function 

interface IuserwithRole extends Role {
    role : 'admin' | 'user'
}

const user1 : IuserwithRole = {       /* This is called Elias . we learned it previouly */
    name : "sakib",
    age : 27,
    role : "admin"
}
// console.log(user1)

                                              /* New Interface */

interface Add {
    (num1 : number, num2: number) : number
}

//  type Add = (num1 : number , num2 : number) => number;
 
const add: Add = (num1, num2) => num1 + num2;

/* Indexing   */

// type Friend = string []

interface IFriend {
    [index : number] : string 
}
const friend : IFriend = ["rakib", "sakib"]