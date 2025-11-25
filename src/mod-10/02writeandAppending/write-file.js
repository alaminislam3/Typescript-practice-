const fs = require("fs");

const content1 = "This is a content and node.js is awesome";

try {
  fs.writeFileSync("./outputfor02/test.txt", content1);
  console.log("file written sync");
} catch (err) {
  console.err(err.message);
}

const content2 = "THis is content too \n asynchronous !!";

fs.writeFile("./outputfor02/test2.txt", content2, (error) => {
  if (error) {
    console.error(error.message);
  } else {
    console.log("file written asynchronously   ");
  }
});
