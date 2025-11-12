// dynamic generalize : Generic            /* For dynamic type recived  */

// 1
type GenericArray<T> = Array<T>

const friends : GenericArray<string> = ['rakib', 'sakib', 'siam']

const number : GenericArray<number> = [4,8,9]

const isEligible : GenericArray<boolean> = [true, false, true, false]

// 2      /* Generic in tuple */

type Coordinate<X,Y> = [X ,Y]
const coordinate1 :Coordinate <string,string> = ['20', '50']
const coordinate2 : Coordinate<number, number>= [20, 50]

// 3  /* Array of object   */
/* We can use dynamic generic array what we declare in number one.  */

type User = {
    name : string,
    age : number
}

const user : GenericArray<User> = [{  /* If we have a lot of obj option we will take type here */
    name : 'rakib',
    age : 27
}, {
    name : 'siam',
    age : 23
}]





