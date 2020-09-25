const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//   if (err) {
//     throw err;
//   }

//   console.log('Folder created');
// });

const filePath = path.join(__dirname, 'test', 'text.txt');

// fs.writeFile(filePath, '\nHello node js !!!!!!', (err) => {
//   if (err) throw err;
  
//   console.log('File has been created');
// });

fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) throw err;

  console.log(content);
})