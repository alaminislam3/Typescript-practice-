class Parent1 {
  name: string;
  age: number;
  address: string;
  constructor(name: string, age: number, address: string) {
    (this.name = name), (this.age = age), (this.address = address);
  }
  getSleep(totalTime: number) {
    console.log(`${this.name} saradin ${totalTime} ghonta ghumay`);
  }
}

class Student extends Parent1 {}
const student1 = new Student("rafi", 20, "bd");
student1.getSleep(12);

class Teacher extends Parent1 {
  designation: string;
  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  ClassTime(totalTime: number) {
    console.log(
      `${this.name} sir (${this.designation}) ${totalTime} ghonta class ney`
    );
  }
}
const teacher1 = new Teacher("kuddos", 29, "ctg", "seniour teacher");
teacher1.ClassTime(10);

// class Parent {
//   name: string;
//   age: number;
//   roll: number;
//   constructor(name: string, age: number, roll: number) {
//     (this.name = name), (this.age = age), (this.roll = roll);
//   }
//   getSleep(totalTime: number) {
//     console.log(`${this.name} saradin ${totalTime} ghonta ghumay`);
//   }
// }
