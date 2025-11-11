// reference type : object

// optional type

// const user: { firstname: string; middlename: string; lastname: string } = {
//   firstname: "Alamin",
//   middlename: "Islam",
//   lastname: "onu",
// };

const user: {
  organization : "programming hero"     /* using fixed value . It's called literal type . but if i put readonly is will called access modifier */
  firstname: string;
  middlename?: string /* optional type */;
  lastname: string;
} = {
   organization: "programming hero" ,
  firstname: "Alamin",

  lastname: "onu",
};

console.log(user)

                       /* Access modifier  */


const user2: {
  readonly organization : "programming hero"     /* using fixed value . It's called literal type . but if i put readonly is will called access modifier */
  
} = {
   organization: "programming hero" }