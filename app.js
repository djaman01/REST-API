const express = require('express');

const app= express();

app.listen(3000, ()=>{
  //on met le lien en console.log pour pouvoir y accéder, mais on peut y accéder juste en écrivant sur le browser localhost:3000  
  console.log('Server is running on http://localhost:3000/users');
});

//Si j'avais écris: http://localhost:3000 ou 3000/, j'aurais écris app.get('' ou '/')= accès par défaut 
app.get('/users', (req,res) => {
  const users = [
    {id: 1, name: 'Jaafar Bendahou'},
    {id: 2, name: 'GTO'}
  ];

  res.json(users);
});
//It defines a route for the path /users using app.get('/users', ...). When a GET request is made to http://localhost:3000/users, the code inside the callback function = route handler, is executed.
//Inside the route handler, it sends a JSON response containing an array of user objects with their IDs and names.

//So, you can say that you've created a server and an API with a single route (/users)
// When someone accesses that route, the API responds with a JSON file containing user data.

//we've defined a route to respond to a request: when a user access the route http:localhost:300/users, the API responds with a jsons file containing user data

