/* Nullable , unknown & Never Type */

const getUser = (input: string | null) => {
  if (input) {
    console.log(`From DB: ${input}`);
  } else {
    console.log("From Db: All User");
  }
};

// getUser(null)

                            /* Unknown  */
  const discountCalculator = (input : unknown) => {
     if(typeof input === 'number'){
        console.log(input * 0.1)
     } else if (typeof input === 'string'){
        const splitedAmmount = input.split(" ");  /* Here I inputed string but getting output as a array. we can use array destructure here */
        console.log(splitedAmmount)
        // console.log(Number(discountAmmount) * 0.1)  /* This is new to me . here we can convert a string to number */
     } else{
        console.log("wrong input")
     }
  }

  discountCalculator(100)
  discountCalculator('100 Tk')
  discountCalculator(null)

                                     /* void */
 const throwError = (msg : string) : never => {
      throw new Error(msg)  
 }
 throwError("error...")





