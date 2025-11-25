const fs = require("fs")

console.log("start reading ...")

fs.readFile("../Data/dairy.txt", "utf-8" , (error, data)=> {
    if(error){
  console.error("error happend: ", error.message)
    }
    console.log("file content: ")
    console.log(data)
})

console.log("This run immediately. note : event loop are working here . that why this line prient first.")