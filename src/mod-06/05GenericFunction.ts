// Generic Function 




// const createArrayWithNumber = (value: number) => [value]

// const createArrayWithObject = (value: {id :number, name :string}) => [value]

const createArrayWithGeneric = <T>(value : T) => {
    return [value]
}

const arrayString = createArrayWithGeneric('rakib')

const arrayObject = createArrayWithGeneric({id : 12, name : 'tero'})


                              /* Tuple */

const addStudent = <T>(studentInfo : T) => {
    return {
        course : "Next level web",
        ...studentInfo
    }
}

const uniqueStu = ["name : badsha, age : 25"]

const student1 = {
    name :" mezba",
    age : 23,
    isPen : false
}           
const student2 = {
    name :"Jhanker",
    age : 42,
    isCar  : true
}

const newStudent = addStudent(uniqueStu)
console.log(newStudent)