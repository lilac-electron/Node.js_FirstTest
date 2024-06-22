// To reference from terminal and run:
// node .
// To run any other file
// node index.js (replacing with the file name)
console.log('Hello World!');

console.log(global.luckyNum)
global.luckyNum = 23
console.log(global.luckyNum)
console.log(process.platform)
console.log(process.env.USER)

const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('lunch', () => {
    console.log("Lunch time!!");
});
eventEmitter.emit('lunch');

const {readFile, readFileSync} = require('fs');

// This blocks any other processes and all code must execute before anything else may run.
const txt = readFileSync('./testFile.txt', 'utf-8');
console.log(`file contents: \n${txt}\n`)
console.log('test to see which is first')

// Using an async so non-blocking technique:
readFile('./testFile.txt', 'utf-8', (err, txt2) => {
    console.log(txt2)
});
console.log('test to see which is first')