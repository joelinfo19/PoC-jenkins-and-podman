// app.js
const http = require('http');
const PORT = 8000;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World from Podman!\n');
}).listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
