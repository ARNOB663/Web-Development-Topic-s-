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