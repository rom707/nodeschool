let through = require('through2');

let tr = through(write, end);

function write (buf, enc, next) {
	this.push(buf.toString().toUpperCase());
	next();
}

function end (done) {
	done();
}

process.stdin.pipe(tr).pipe(process.stdout);