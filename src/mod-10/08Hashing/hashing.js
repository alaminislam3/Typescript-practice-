// const crypto = require("crypto")

// console.log("\n MD5 Hash: ")
// const md5Hash = crypto.createHash("md5").update("password123").digest("hex") /* not recommended */
// console.log("input : password123");
// console.log("MD5 HashedPassword: ", md5Hash)

const crypto = require("crypto")

const sha256Hash = crypto.createHash("sha256Hash").update("alamin123").digest("hex")

console.log("hashed pass" , sha256Hash)