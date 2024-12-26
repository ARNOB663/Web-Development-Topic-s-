// creating instance of object
// 1. Create a function named person
// 2. Add some properties like first_name, last_name, age, city, isBangladeshi
// 3. Add a method named getName which will return the full name of the person
// 4. Create an instance of the person object and call the getName method
// 5. Print the full name of the person
function person()
{
    this.first_name = "John";
    this.last_name = "Doe";
    this.age=34;
    this.city="New York";
    this.isBangladeshi=true;
    this.getName=()=>
    {
        return this.first_name+" "+this.last_name;
    }

}

let personInstance = new person();

console.log(personInstance.getName());