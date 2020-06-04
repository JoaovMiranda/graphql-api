
A SIMPLE API MADE WITH GRAPHQL AND KNEX.js

to run project: node server.js

to test:
{
   getUsers{
     name email id
   }
 
   getUser(id: 2){
     email
   }
}

mutation{
  createUser(input: {
    name: "batata"
    email: "batata.com"
    password: "123456"
  }) {
    id
    name
  }
}