// This is the module wrapper function used in node.
// (function (exports, require, module, __filename, __dirname) {
//
// });

// Path module
const path = require("path");

// Basename: base file name
console.log(path.basename(__filename));
// Directory name
console.log(path.dirname(__filename));
// File extension
console.log(path.extname(__filename));
// Create path object (dir, root, base, ext, name)
console.log(path.parse(__filename));
console.log(path.parse(__filename).name); // access specific key in object
// Concatenate paths
// console.log(path.join(__dirname, 'folderName', 'fileName.ext'));
