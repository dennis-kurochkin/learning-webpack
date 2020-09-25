const path = require('path');

console.log('Название файла', path.basename(__filename));
console.log('Имя директории', path.dirname(__dirname));
console.log('Расширение файла', path.extname(__filename));

console.log('Parse', path.parse(__filename));

console.log(path.join(__dirname, 'server', 'index.html'));