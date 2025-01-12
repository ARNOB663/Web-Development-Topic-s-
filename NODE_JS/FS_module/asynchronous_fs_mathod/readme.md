# Node.js `fs` Module - File System Methods
The `fs` module in Node.js provides the capability to interact with the file system, enabling operations like reading, writing, deleting, and manipulating files and directories. This README explains all supported methods, including both **asynchronous** and **synchronous** variants, and serves as a comprehensive guide for developers.
## Table of Contents
1. [Getting Started]()
2. [Asynchronous vs Synchronous]()
3. [Methods Overview]()
    - [File Reading and Writing]()
    - [File Information]()
    - [File Manipulation]()
    - [Directory Manipulation]()
    - [Watching Files and Directories]()

4. [Detailed Explanation]()
    - [Reading Files]()
    - [Writing Files]()
    - [Checking File Stats]()
    - [File Manipulation]()
    - [Directory Manipulation]()

5. [Error Handling]()
6. [Further Readings]()

## Getting Started
To use the `fs` module in a Node.js project, you need to import it first:
``` javascript
const fs = require('fs');
```
## Asynchronous vs Synchronous
### Asynchronous Methods
- Do not block the Node.js event loop.
- Return results via a callback function or Promise (if using `fs/promises`).
- Generally recommended for efficient and scalable applications.

### Synchronous Methods
- Block the event loop until the operation is complete.
- Simple to use but can reduce application performance.
- Use with caution, especially in high-performance or I/O-heavy scenarios.

## Methods Overview
### File Reading and Writing

| Operation | Asynchronous Method | Synchronous Method |
| --- | --- | --- |
| Read contents | `fs.readFile()` | `fs.readFileSync()` |
| Write/overwrite | `fs.writeFile()` | `fs.writeFileSync()` |
| Append content | `fs.appendFile()` | `fs.appendFileSync()` |
| Open a file | `fs.open()` | `fs.openSync()` |
### File Information

| Operation | Asynchronous Method | Synchronous Method |
| --- | --- | --- |
| Get file stats (metadata) | `fs.stat()` | `fs.statSync()` |
| Check file access | `fs.access()` | `fs.accessSync()` |
### File Manipulation

| Operation | Asynchronous Method | Synchronous Method |
| --- | --- | --- |
| Rename a file | `fs.rename()` | `fs.renameSync()` |
| Delete a file | `fs.unlink()` | `fs.unlinkSync()` |
| Truncate a file | `fs.truncate()` | `fs.truncateSync()` |
| Copy a file | `fs.copyFile()` | `fs.copyFileSync()` |
### Directory Manipulation

| Operation | Asynchronous Method | Synchronous Method |
| --- | --- | --- |
| Create directory | `fs.mkdir()` | `fs.mkdirSync()` |
| Read directory | `fs.readdir()` | `fs.readdirSync()` |
| Remove directory | `fs.rm()` | `fs.rmSync()` |
### Watching Files and Directories
- Watch file or directory changes: `fs.watch()` (Asynchronous only)

## Detailed Explanation
This section provides usage examples and explanations for each key method.
### Reading Files
- **Asynchronous**: Uses `fs.readFile()` to read a file’s contents. Content is returned in the callback.
- **Synchronous**: Uses `fs.readFileSync()`, returning file contents directly without callbacks.

#### Example:
``` javascript
// Asynchronous
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Synchronous
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);
```
### Writing Files
- **Asynchronous**: Uses `fs.writeFile()` to write content into a file, overwriting existing content.
- **Synchronous**: Uses `fs.writeFileSync()` to block the process until the file is written.

#### Example:
``` javascript
// Asynchronous
fs.writeFile('example.txt', 'Hello, world!', (err) => {
  if (err) throw err;
  console.log('File written successfully!');
});

// Synchronous
fs.writeFileSync('example.txt', 'Hello, world!');
console.log('File written successfully!');
```
### Checking File Stats
Retrieve file metadata (size, creation date, etc.) using `fs.stat()` (async) or `fs.statSync()` (sync).
#### Example:
``` javascript
// Asynchronous
fs.stat('example.txt', (err, stats) => {
  if (err) throw err;
  console.log(`File size: ${stats.size} bytes`);
});

// Synchronous
const stats = fs.statSync('example.txt');
console.log(`File size: ${stats.size} bytes`);
```
### File Manipulation Example
You can rename, delete, or copy files using the following:
#### Renaming Files
``` javascript
// Asynchronous
fs.rename('old-name.txt', 'new-name.txt', (err) => {
  if (err) throw err;
  console.log('File renamed successfully!');
});

// Synchronous
fs.renameSync('old-name.txt', 'new-name.txt');
console.log('File renamed successfully!');
```
#### Deleting Files
``` javascript
// Asynchronous
fs.unlink('example.txt', (err) => {
  if (err) throw err;
  console.log('File deleted successfully!');
});

// Synchronous
fs.unlinkSync('example.txt');
console.log('File deleted successfully!');
```
### Directory Manipulation Example
You can create, read, and delete directories with the following methods:
#### Creating Directories
``` javascript
// Asynchronous
fs.mkdir('new-directory', (err) => {
  if (err) throw err;
  console.log('Directory created successfully!');
});

// Synchronous
fs.mkdirSync('new-directory');
console.log('Directory created successfully!');
```
#### Reading Directories
``` javascript
// Asynchronous
fs.readdir('.', (err, files) => {
  if (err) throw err;
  console.log('Files in directory:', files);
});

// Synchronous
const files = fs.readdirSync('.');
console.log('Files in directory:', files);
```
## Watching Files and Directories
Use `fs.watch()` to monitor file or directory changes.
#### Example:
``` javascript
fs.watch('example.txt', (eventType, filename) => {
  console.log(`File ${filename} triggered a ${eventType} event.`);
});
```
## Error Handling
Always handle errors appropriately to avoid application crashes. For example:
``` javascript
fs.readFile('nonexistent-file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err.message);
    return;
  }
  console.log(data);
});
```
## Further Readings
- [Node.js Official Documentation - fs Module]()
- [Error Handling in Node.js]()
