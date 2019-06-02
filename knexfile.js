module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:/phish_tour'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};