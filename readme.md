# API with Graphql

A simple API made with Graphql and knex.js.

## Run

```bash
npm run start
``` 

## Usage

```javascript
// To create a new user:
mutation {
  createUser(
    input: {
      name: "example"
      email: "example.com"
      password: "123456"
    }
  ) { id name }
}

// To get users:
{
   getUsers {
     name email id
   }
 
   getUser(id: 2) {
     email
   }
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)