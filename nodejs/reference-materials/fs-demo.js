// File system module
const fs = require("fs");
// Path module
const path = require("path");

// Create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, err => {
//   if (err) throw err;
//   console.log("Folder created...");
// });

// Create and write to file
// fs.writeFile(path.join(__dirname, "/test", "hello.txt"), "Hello World!", err => {
//   if (err) throw err;

//   // Append file
//   fs.appendFile(path.join(__dirname, "/test", "hello.txt"), " aftertext", err => {
//     if (err) throw err;
//     console.log("File written to...");
//   });

//   console.log("File written to...");
// });

// Read file
// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Rename file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "hello2.txt"),
  err => {
    if (err) throw err;
    console.log("File renamed.");
  }
);
