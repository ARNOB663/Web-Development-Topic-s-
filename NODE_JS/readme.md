# Introduction to Node.js

Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript on the server side. It is built on Chrome's V8 JavaScript engine and enables the development of scalable and high-performance network applications.

## Key Features of Node.js

1. **Asynchronous and Event-Driven**:
   - Node.js uses an event-driven, non-blocking I/O model, making it efficient and suitable for real-time applications.

2. **Single-Threaded but Highly Scalable**:
   - Node.js operates on a single-threaded event loop, which can handle multiple connections concurrently. This makes it highly scalable.

3. **Fast Execution**:
   - Built on the V8 JavaScript engine, Node.js executes JavaScript code quickly.

4. **NPM (Node Package Manager)**:
   - Node.js comes with NPM, a package manager that provides access to thousands of open-source libraries and tools.

5. **Cross-Platform**:
   - Node.js can run on various platforms, including Windows, macOS, and Linux.

## Use Cases of Node.js

- **Web Servers**:
  - Node.js is commonly used to build web servers and APIs due to its non-blocking I/O and event-driven architecture.

- **Real-Time Applications**:
  - Ideal for real-time applications like chat applications, online gaming, and collaborative tools.

- **Microservices**:
  - Node.js is well-suited for building microservices due to its lightweight and modular nature.

- **Command-Line Tools**:
  - Node.js can be used to create command-line tools and scripts.

## Example Code

Here is a simple example of a Node.js server:

```javascript
// Import the http module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Send the response body
  res.end('Hello, World!\n');
});

// Define the port to listen on
const port = 3000;

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});