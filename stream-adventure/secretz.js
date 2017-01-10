let crypto = require('crypto');
let zlib = require('zlib');
let tar = require('tar');
let through = require('through');

let decipher = crypto.createDecipher(process.argv[2], process.argv[3]);
let gunzip = zlib.createGunzip();
let parser = tar.Parse();

parser.on('entry', (e) => {
	if (e.type !== 'File') return;
	let hashStream = crypto.createHash('md5', { encoding: 'hex' });
	e.pipe(hashStream).pipe(through((md5) => {
		console.log(md5 + ' ' + e.path);
	}));
});



process.stdin.pipe(decipher)
	.pipe(gunzip)
	.pipe(parser);
