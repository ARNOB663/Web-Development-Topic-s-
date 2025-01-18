
const express = require('express')
const users = require('./MOCK_DATA.json')

const app = express();

const port = 8000;


//Routes
app.get("/api/users",(req,res) => {
    return res.json(users)
})

app.get("/api/users/:id",(req,res) => {
      const id= req.params.id;
      const user =users.find(user => user.id == id);
      return  res.json(user)
})

app.get('/users', (req, res) => {
    /*
    */ 
   const html =  `
    <ul>
       ${users.map((user) => 
        `<li>${user.first_name}</li>`//<li>${user.first_name} ${user.last_name}</li>
       ).join('')}//<li>${user.first_name} ${user.last_name}</li>
    <ul> 
   `;
   res.send(html);

})




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})