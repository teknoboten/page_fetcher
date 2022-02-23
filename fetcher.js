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


request(source, (error, response, body) => {
  // console.error(`error: ${error}`);
  // console.log(`statusCode: ${response && response.statusCode}`);
  // console.log(`body: ${body}`);

    // fs.mkdir(dest, () => {

//when fs.mkdir is complete, callback to fs.writeFile

//pass body / error function to write to fs
      fs.writeFile(body, dest, (error) => {
        if (error) throw error;
        console.log(`wrote ${body} to ${dest}`);
      });

      // console.log(body);

    });


// });










// node fetcher.js https://leslie-knope-quotes.herokuapp.com/quotes ./nope
//credit  https://github.com/mupraj10/leslie-knope-quotes