# Creating Instance of Object in JavaScript

This project demonstrates how to create an instance of an object in JavaScript using a constructor function.

## Explanation

### Steps

1. **Create a function named `person`**:
   - This function will act as a constructor for creating person objects.

2. **Add properties**:
   - `first_name`: The first name of the person.
   - `last_name`: The last name of the person.
   - `age`: The age of the person.
   - `city`: The city where the person lives.
   - `isBangladeshi`: A boolean indicating if the person is Bangladeshi.

3. **Add a method named `getName`**:
   - This method will return the full name of the person by concatenating the `first_name` and `last_name` properties.

4. **Create an instance of the `person` object**:
   - Use the `new` keyword to create an instance of the `person` object.

5. **Print the full name of the person**:
   - Call the `getName` method and use `console.log` to print the full name.

### Example Code

```javascript
// Creating instance of object
// 1. Create a function named person
// 2. Add some properties like first_name, last_name, age, city, isBangladeshi
// 3. Add a method named getName which will return the full name of the person
// 4. Create an instance of the person object and call the getName method
// 5. Print the full name of the person

// Constructor function for creating person objects
function person() {
    // Adding properties to the person object
    this.first_name = "John";
    this.last_name = "Doe";
    this.age = 34;
    this.city = "New York";
    this.isBangladeshi = true;

    // Adding a method to the person object
    this.getName = () => {
        // Returning the full name of the person
        return this.first_name + " " + this.last_name;
    };
}

// Create an instance of the person object
let personInstance = new person();

// Call the getName method and print the full name
console.log(personInstance.getName()); // John Doe