const fs = require('fs');
const request = require('request');

const source = process.argv.slice(2, 3)[0].toString();
const dest = process.argv.slice(3, 4)[0].toString();


request(source, (error, response, body) => {

  fs.writeFile(dest, body, (error) => {  

    //if dest, prompt to overwrite 
    // if (dest){
    //   console.log('that file already exists!');
    //   return;
    // }


    
    fs.stat(dest, (error, stats) => {
      // console.log(`${body}\n`);
      // console.log(stats);
      console.log(`downloaded and saved ${stats.size} bytes to ${dest}:`);
      
    });

    if (error) throw error;
    
  });

});




// node fetcher.js https://leslie-knope-quotes.herokuapp.com/quotes ./nope
//credit  https://github.com/mupraj10/leslie-knope-quotes
/*
node fetcher.js http://www.example.edu/ ./index.html



-> edge cases 
- local path already exists (overwrite w/o prompt)

-> stretch
- prompt y to overwrite, other wise terminate
- refactor dest / source as getRequest() 

*/