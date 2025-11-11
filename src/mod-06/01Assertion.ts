/* Type assertion means confidently tell a variable that which type is it */

// let anything : any ;

// anything = 5000

// anything as number

const kgToGramConverter = (input: number | string | undefined) : number | string | undefined => {
     if(typeof input === 'number'){
         return input * 1000
     }
     else if (typeof input === 'string'){
        const [firstValue]  = input.split(" ")
        return Number(firstValue) * 1000
        
     }
}

   const berKori =   kgToGramConverter(12) as number
   console.log(berKori)
//    berKori.toFixed         /* THis is called type narrow  */
   const berKori2 =   kgToGramConverter('12 KG') as string 
   console.log(berKori2)