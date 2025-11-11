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
    role : string 
}
const user1 : IuserwithRole = {       /* This is called Elias . we learned it previouly */
        name : "sakib",
        age : 27,
        role : "Admin"
}

console.log(user1)
