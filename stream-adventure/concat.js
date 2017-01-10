let concat = require('concat-stream');

let concatStream = concat((body) => {
    console.log(body.reverse().toString());
});

process.stdin.pipe(concatStream);