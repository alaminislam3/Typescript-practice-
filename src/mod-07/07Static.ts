// static  /* THat means it will naver change  */

class Counter {
    static count : number = 0; /* static korle ekta memory te rakhe  */
    static increament (){
       return Counter.count = Counter.count+1
    }
    static drecrement (){
       return  Counter.count = Counter.count-1
    }
}
// const instance1 = new Counter()
console.log(Counter.increament())
console.log(Counter.increament())
// console.log(instance1.drcrement())

// const instance2 = new Counter()
// console.log(instance1.increament())
// console.log(instance1.increament())