// oop : instance of type guard / type narrowing

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getSleep (numerOftime: number){
      console.log(`${this.name} doinik ${numerOftime} ghonta ghumay`)
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
    this.name = name;
  }
  doStudy(totalTime: number) {
    console.log(`${this.name} daily ${totalTime} porasuna kore`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
    this.name = name;
  }
  takeClass(totalTime: number) {
    console.log(`${this.name} sir daily ${totalTime} ghonta class ney`);
  }
}

const isStudent = (user : Person) => {
 return user instanceof Student
}

const isTeacher = (user : Person) => {           /* User is teacher  */
    return user instanceof Teacher
}


const getUser = ( user : Person ) => {
    if(isStudent(user)){
       user.doStudy(8)                                           
    } else if (isTeacher(user)){
       user.takeClass(5)
    } else {
        user.getSleep(10)
    }
}

const student1 = new Student("Mr.student")
const teacher1 = new Teacher("Mr.Teacher")
const person1 = new Person("Mr.person")

getUser(person1)
