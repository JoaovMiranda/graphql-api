const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const schema = require('./api/schema');
const graphiql = true;
const app = express();

app.use('/api', graphqlHTTP({ schema, graphiql }));
app.listen(4000, () => console.log('Executando na porta: localhost:4000/api'));