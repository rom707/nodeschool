let websocket = require('websocket-stream');
let http = require('http');

let httpServer = http.createServer((req, res) => {
	res.end();
});

let wss = websocket.createServer({'server': httpServer}, handle);

function handle(stream) {
	stream.pipe(process.stdout);
}

httpServer.listen('8099');