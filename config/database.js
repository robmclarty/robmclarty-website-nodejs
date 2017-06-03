'use strict'

// NOTE: For the Docker db (used for local development) the super-user password
// is defined as an environment variable in the docker-compose.yml file. The
// default username is "postgres" and the default database name is also "postgres".
module.exports = {
  development: {
    url: process.env.DATABASE || 'postgres://localhost:5432/robmclarty-dev',
    dialect: 'postgres',
    seederStorage: 'sequelize'
  },
  test: {
    url: process.env.DATABASE || 'postgres://localhost:5432/robmclarty-test',
    dialect: 'postgres',
    seederStorage: 'sequelize'
  },
  production: {
    url: process.env.DATABASE || '',
    dialect: 'postgres',
    seederStorage: 'sequelize'
  }
}
