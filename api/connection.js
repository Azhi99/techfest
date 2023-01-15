
const knex = require('knex')
const db  = knex({
  client: 'mysql',
  connection: {
    host : process.env.DB_HOST,
    port : process.env.DB_PORT,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME
  },
  debug:true
});
module.exports  = db
        