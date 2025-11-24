const os = require("os");
const { release } = require("process");

console.log("system info \n")
console.log("-".repeat(50));

console.log("platfrom details: ")
console.log("platform: ", os.platform());
console.log("Architecture: ", os.arch())
console.log("os type ", os.type())
console.log("OS Release" , os.release())
console.log("Hostname", os.hostname())

console.log("\nCpu info : " )
const cpus = os.cpus()
console.log("CPU Model :", cpus[0].model)
console.log("Number of cors:" , cpus.length)
console.log("CPU Speed: ", cpus[0].speed)

console.log("-".repeat(50));

const totalMem = os.totalmem();
const freeMem = os.freemem()
console.log("Total Memory: ", (totalMem/1024/1024/1024).toFixed(2), "GB")
console.log("Free Memory: ", (freeMem/1024/1024/1024).toFixed(2), "GB")

const uptime = os.uptime()

const days = Math.floor(uptime/86400)
const hours = Math.floor((uptime%86400) / 3600)
const minutes = Math.floor((uptime% 36000) / 60)

 console.log(`${days} days ${hours} hours ${minutes} minutes`)

