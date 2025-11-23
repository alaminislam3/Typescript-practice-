const path = require("path")
console.log("current file info: \n")
console.log("filename ", __filename)
console.log("Directory", __dirname)

console.log("\n" + "-".repeat(50) + "\n")

const filePath = '/alamin/documents/mextLevel.pdf'

console.log("analzing path :", filePath, "\n")
console.log("Directory : ", path.dirname(filePath))
console.log("Basename :", path.basename(filePath))       /* file name */
console.log("File extension:", path.extname(filePath))       /* file type */
console.log("Filename :", path.basename(filePath, path.extname(filePath)))