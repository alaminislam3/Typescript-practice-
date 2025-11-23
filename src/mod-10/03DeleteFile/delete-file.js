// const { error } = require("console");
const fs = require("fs");

// fs.writeFileSync("./outputfor03/temp.txt", "this is temp file");
// console.log("temp file created ");

// if (fs.existsSync("./outputfor03/temp.txt")) {
//   console.log("file exists!!! ");

// //   fs.unlinkSync("./outputfor03/temp.txt");
// //   console.log("file deleted");
// // }
// }
// try {
//   fs.unlinkSync("./outputfor03/temp.txt")
// } catch (err) {
//   console.log("Error :", err.message);
//   console.log("file deleted")
// }

fs.writeFile("./outputfor03/temp.txt", " another file created ", (err) => {
  if (err) return console.error(err.message);
  console.log("another temp file created");

  fs.unlink("./outputfor03/temp.txt", (err) => {
    if (err) {
      console.error("Error :", err.message);
    } else {
      console.log("Temp2 deleted");
    }
  });
});
