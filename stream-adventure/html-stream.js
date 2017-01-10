let trumpet = require('trumpet');
let through = require('through2');

let tr = trumpet();
let loud = tr.select('.loud').createStream();

loud.pipe(through(function(buf, _, next) {
	this.push(buf.toString().toUpperCase());
	next();
})).pipe(loud);

// loud.on('data', (buf) => {
// 	loud.end(buf.toString().toUpperCase());
// });

process.stdin.pipe(tr).pipe(process.stdout);