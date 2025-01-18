
const express = require('express')
const users = require('./MOCK_DATA.json')
const fs = require('fs')

const app = express();

const port = 8000;
//Middleware
app.use(express.urlencoded({extended:false}))//parse application/x-www-form-urlencoded

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
       ).join('')}
    <ul> 
   `;
   res.send(html);

})
//
// app.post("api/users",(req,res) =>{
//     //todo creat  new user 
//     return res.json({status:"pending"})
//     })
// app.patch("api/user/:id",(req,res) =>{
//     //todo edit the user 
//     return res.json({status:"pending"})
//     })
// app.delete("api/user/:id",(req,res) =>{
//     //todo delete the user with id
//     return res.json({status:"pending"})
//     }

// marging them together


app.route("/api/users/:id").get((req,res) => {
    const id= req.params.id;
    const user =users.find(user => user.id == id);
    return  res.json(user)
}).patch((req,res) =>{
    //todo edit the user 

    const id = req.params.id;
    const body = req.body;
    const user = users.find(user => user.id == id);
    const index = users.indexOf(user);
    users[index] = {...user , ...body};
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data) => {
        return res.json({status:"pending"})
    })  

    return res.json({status:"pending"})
}
).delete((req,res) =>{
    //todo delete the user with id

    const id = req.params.id;
    const user = users.find(user => user.id == id);//find the user
    const index = users.indexOf(user);
    users.splice(index,1);//remove the user from the array
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data) => {
        return res.json({status:"pending"})
    })
    return res.json({status:"pending"})
})

app.post("/api/users",(req,res) =>{
    //todo creat  new user 
    const body = req.body;
    users.push({...body , id:users.length+1});
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data) =>{
        return res.json({status:"pending" , id:users.length})
    })

    })




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})