// by object literal
// what is object literal
// how to create object by object literal

let person = {
    first_name: 'Arnob',
    last_name: 'Dev Nath',
    age: 22,
    city: 'Chittagong',
    isBangladeshi: true, // key:value pair is called property
    getName: function() { // function is called method of object
      console.log(`My full name is ${this.first_name} ${this.last_name}`); // this is a keyword which refers to the current object
    }
  };
  
  // Example usage:
  person.getName(); // My full name is Arnob Dev Nath