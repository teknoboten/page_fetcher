/*
node fetcher.js http://www.example.edu/ ./index.html
Downloaded and saved 3261 bytes to ./index.html

Use the request library to make the HTTP request
Use Node's fs module to write the file
Use the callback based approach we've been learning so far
Do not use the pipe function
Do not use synchronous functions (see warning below)

-> edge cases 
- local path already exists (overwrite w/o prompt)

-> stretch
- prompt y to overwrite, other wise terminate

*/

const fs = require('fs');
const request = require('request');

const source = process.argv.slice(2, 3)[0];
const dest = process.argv.slice(3, 4)[0];

// const fetcher = (source, dest) => {

// }


// node fetcher.js http://placekitten.com/200/300 ./kittens