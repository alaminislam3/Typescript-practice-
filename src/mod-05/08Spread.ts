/* Spread and rest */

const user = {
    name : 'Alamin',
    phone : '017545446464'
}

const otherInfo = {
    hobby : "Watching movie",
    favouriteColor : 'black'
}

const result = {...user, ...otherInfo}

console.log(result)

                                   /* Rest */
     const sendInvite = (...friends : string []) => {
         friends.forEach((friend : string) => console.log(`send invite to ${friend}`) )   
     }
     sendInvite("Rinku", "pinku", "Rakhgi")                              