// union / or 
type Userrole = "Admin" | "user";

const getDashboad =(role : Userrole) => {
  if (role === 'Admin'){
     return "Admin Dashboard"
  }
  else if (role === 'user'){
    return "user Dashboard"
  }
  else {
    return "guest Dashboard"
  }
}
getDashboad('Admin')

//Intersection &

type Employee = {
    id : number,
    name : string,
    phoneNumber : number
}

type Manager = {
    designation : string ,
    teamsize : number 
}

type BothManagerandEmployee = Employee & Manager

const superman : BothManagerandEmployee = {
    id : 23402397,
    name : 'sakib',
    phoneNumber: 9401294710421,
    designation: 'habijabi',
    teamsize: 50
}