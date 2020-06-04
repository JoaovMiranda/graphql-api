const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)
module.exports = knex

// // INSERT
// knex('users').insert({
//     name: 'Teste',
//     email: 'Teste.tese',
//     password: 'teste'
// }).then(data => console.log(data))

// // SELECT
// knex('users').where({name: 'Teste'}).first().then(resultado => console.log(resultado))

// // DELETE
// knex('users').delete().then(resultado => console.log(resultado))
