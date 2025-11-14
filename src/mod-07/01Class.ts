class Animal {
  name: string;
  color: string;
  number: number;
  sound: string;
  constructor(name: string, color: string, number: number, sound: string) {
    (this.name = name),
      (this.color = color),
      (this.number = number),
      (this.sound = sound);
  }
  makeSound() {
    console.log(`this ${this.name} is making sound: ${this.sound}`);
  }
}

const dog = new Animal("Tommy", "white", 2, "ghew ghew");
dog.makeSound();

// const cat = new Animal ('pappy', 'white and dark', 1, 'mew mew')
// console.log(dog, 'and', cat)
/*  Peramiter properties */

//         Better way to define Animal class

class Birds {
  constructor(
    public name: string,
    public color: string,
    public sound: string
  ) {}
  makeSound() {
    console.log(`this ${this.name} is making sound: ${this.sound}`);
  }
}
const crow = new Birds('kak', 'black', 'ka ka ka')
crow.makeSound()
