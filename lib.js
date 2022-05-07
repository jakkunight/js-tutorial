const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (text, ) => new Promise((resolve, reject) => {
    readline.question(text, (ans) => {
        if(!ans){
            reject("No arguments.");
        }else{
            resolve(ans);
        }
    });
});

module.exports = question;