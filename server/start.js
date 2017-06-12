#!/usr/bin/env node

'use strict'

const app = require('./')
const models = require('./models')

// Connect to DB and start the server.
models.sequelize.sync()
  .then(() => {
    const server = app.listen(app.get('port'), () => {
      console.log(`Server started at port ${ server.address().port }`)
    })
  })
  .catch(err => console.log('DB Error: ', err))
