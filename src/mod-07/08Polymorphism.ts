// polymorphism : bohurupi

class Person {
  getSleep() {
    console.log(`I am normal person I sleep 8 hours`);
  }
}

class Student extends Person {
  getSleep() {
    console.log(`I am student I sleep 7 hours`);
  }
}

class Developer extends Person {
  getSleep() {
    console.log(`I am Developer  I sleep 6 hours`);
  }
}

const getSleep = (params: Person) => {
  params.getSleep();
};

const person1 = new Student();
const person2 = new Developer();
const person3 = new Person();
// getSleep(person3)

/* 2 */

class Shape {
    getArea (): number {
        return 0
    }
}

class Circle extends Shape {
    radius : number
    constructor(radius : number){
        super()
        this.radius = radius
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius
    }
}

class Rectangle extends Shape {
    height : number;
    width : number
    constructor(height : number, width: number){
       super()
      this.height = height,
      this.width = width
    }
    getArea(): number {
        return this.height * this.width
    }
}
const getWholeArea = (params : Shape) => {
    console.log(params.getArea())
}

const instence1 = new Shape()
const instance2 = new Circle(10)
const instance3 = new Rectangle(10,10)

getWholeArea(instance3)












// class Shape {
//   getArea(): number {
//     return 0;
//   }
// }

// class Circle extends Shape {
//   reduis: number;
//   constructor(reduis: number) {
//     super();
//     this.reduis = reduis;
//   }
//   getArea(): number {
//     return Math.PI * this.reduis * this.reduis;
//   }
// }

// class Rectangle extends Shape {
//   height: number;
//   width: number;
//   constructor(height: number, width: number) {
//     super();
//     (this.height = height), (this.width = width);
//   }
//   getArea(): number {
//     return this.width * this.height;
//   }
// }

// const getArea = (params : Shape)=> {
//    console.log(params.getArea())
// }

// const shape1 = new Shape()
// const shape2 = new Circle(10)
// const shape3 = new Rectangle(10,10)

// getArea(shape3)