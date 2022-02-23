const fs = require('fs');
const request = require('request');

// const readline = require('readline');
// const { stdin: input, stdout: output } = require('process');
//capture input / output from process object

const source = process.argv.slice(2, 3)[0].toString();
const dest = process.argv.slice(3, 4)[0].toString();


//fs.stat -> is dest valid -> if file exists -> readline -> if y -> request -> if success -> writefile
//          -> if not -> log error -> end process
//                          -> if not -> request -> if success -> writefile
//                                                      -> if n, log error -> end process
//                                      

//check if dest is valid - if not, log an error and end process

//if source returns an error or non-200, log an error and end process

//if file exists, prompt to overwrite 




request(source, (error, response, body) => {

  fs.writeFile(dest, body, (error) => {

    fs.stat(dest, (error, stats) => {
      console.log(`downloaded and saved ${stats.size} bytes to ${dest}:`);
    });
    if (error) throw error;
  });

});








/*


    // if dest, prompt to overwrite -- move this check outside of writefile???
    // if (dest) {
    
    //   //do i create the interface here ????

    //   const rl = readline.createInterface({ input, output });

    //   rl.question(`that file already exists! press 'y' to overwrite`, (answer) => {

    //     //if answer === y, save the file
    //     //else, exit
    //     if (answer === '\u0079') {

    //     }

    //   });

    // }





node fetcher.js https://leslie-knope-quotes.herokuapp.com/quotes ./nope
credit  https://github.com/mupraj10/leslie-knope-quotes

-> edge cases
- local path already exists (overwrite w/o prompt)
... this already worked

-> stretch
- prompt y to overwrite, otherwise terminate
- refactor dest / source as getRequest() ????



// fs.open(dest, (err) => {
//   if (err) {
//     if (err.code === 'EEXIST') {
//       console.error('that file exists!');
//       return;
//     }
//     throw err;
//   };
// });


*/