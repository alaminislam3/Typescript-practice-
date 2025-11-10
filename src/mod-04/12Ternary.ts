// Ternary , Nullish Coalescing & Optional Chaining 

// ? : ternary operator : decision making 
// ?? : nullish coalescing /* It's only work in -> null and undefined  */
// ?. optional chaining 

// const userAge = 21

const biyerJonneEligible  = (age : number) => {
    // if(age >= 20){
    //     console.log("you  are eligible")
    // } else {
    //     console.log("You are not eligible ")
    // }

 /* 2 */   const result = age >= 21 ? " you are eligible" : " you are not eligible"

    console.log(result)
}

biyerJonneEligible(18)

/* nullish coalescing */ /*  Null and undefined  */

const userTheme = undefined;

// const userTheme = "red theme";

const selectedTheme = userTheme ?? "Light"

console.log(selectedTheme)

                      /* Ternary and nullish  */
const isAuthenticated = "" 

const resultWithTernary = isAuthenticated ? isAuthenticated : "you are guest !"

const resultWithNullish = isAuthenticated ?? "You are won!"

console.log(resultWithTernary,resultWithNullish)


/* optional chaining  */

const user : {name : string, city: string , postalCode?: number} = {
    name : "Alamin",
    city: "Dhaka",
    // postalCode: 1214
}
console.log(user.postalCode)



