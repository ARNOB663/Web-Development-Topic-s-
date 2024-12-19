# Modern JavaScript Object Oriented Programming and Debugging

## Object Oriented Programming (OOP) in JavaScript

Object Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code. Data is in the form of fields (often known as properties or attributes), and code is in the form of procedures (often known as methods).

### Key Concepts of OOP in JavaScript:
- **Classes and Objects**: Classes are blueprints for creating objects. An object is an instance of a class.
- **Inheritance**: A mechanism where one class can inherit properties and methods from another class.
- **Encapsulation**: The bundling of data with the methods that operate on that data.
- **Polymorphism**: The ability to present the same interface for different underlying forms (data types).

### Example:
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  study() {
    console.log(`${this.name} is studying.`);
  }
}

const student = new Student('John Doe', 20, 'S12345');
student.greet(); // Hello, my name is John Doe and I am 20 years old.
student.study(); // John Doe is studying.