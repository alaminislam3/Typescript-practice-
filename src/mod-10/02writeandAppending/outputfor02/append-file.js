const fs = require("fs")

fs.writeFileSync('../outputfor02/new2.log' , "Application started \n ")
console.log("application started ")


const logEntrynew = `\n ${new Date().toISOString()} user logged in again \n`;
fs.appendFileSync("../outputfor02/new.log" , logEntrynew)


/* new learn */
// const logEntry1 = `\n ${new Date().toISOString()} user logged in \n`;
// fs.appendFileSync("../outputfor02/new.log", logEntry1);

// const logEntry2 = `${new Date().toISOString()} data fatched`;
// fs.appendFileSync('../outputfor02/new.log' , logEntry2);


console.log("task complete")
