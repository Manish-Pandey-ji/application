// Import the http module
const http = require('http');

// Define the port to listen on
const port = process.env.PORT || 3000;

// Create a server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

// Start the server
server.listen(port, () => {
    console.log(`Server running at port ${port}`);
    console.log('Manish Pandey here');
});
