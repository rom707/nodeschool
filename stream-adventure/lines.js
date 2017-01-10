let through = require('through2');
let split = require('split');

let isOddNumbered = false;

process.stdin
	.pipe(split())
	.pipe(through(function (line, _, next) {
		let res = '';
		if (isOddNumbered) {
			res = line.toString().toUpperCase();
		} else {
			res = line.toString().toLowerCase();
		}
		this.push(res + '\n');
		next();
		isOddNumbered = !isOddNumbered;
	}))
	.pipe(process.stdout);