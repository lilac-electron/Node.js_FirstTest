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
const { response } = require('express');
const eventEmitter = new EventEmitter();
eventEmitter.on('lunch', () => {
    console.log("Lunch time!!");
});
eventEmitter.emit('lunch');

/*
const {readFile, readFileSync} = require('fs');

// This blocks any other processes and all code must execute before anything else may run.
const txt = readFileSync('./testFile.txt', 'utf-8');
console.log(`file contents: \n${txt}\n`)
console.log('test to see which is first')

// Using an async so non-blocking technique:
readFile('./testFile.txt', 'utf-8', (err, txt2) => {
    console.log(txt2)
});
console.log('test to see which is first')*/

// Using promises to make a non-blocking clean solution
const {readFile} = require('fs').promises;
async function testFunction() {
    const file = await readFile('./testFile.txt', 'utf-8');
};

const myModule = require('./my-module')
console.log(myModule);

const app = express();
app.get('/', (request, response) =>{
    readFile('./index.html', 'utf-8', (err, html) =>{
        if (err){
            response.status(500).send('Sorry, not working!');
        }
        response.send(html);
    })
});

app.listen(process.env.PORT || 3000)