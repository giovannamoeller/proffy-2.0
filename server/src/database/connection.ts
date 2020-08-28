import knex from 'knex';

const connection = knex({
    client: 'pg',
    connection: {
      host : 'localhost',
      user : 'giovannamoeller',
      password : '',
      database : 'proffys'
    }
});

export default connection;