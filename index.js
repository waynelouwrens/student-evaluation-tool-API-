const express = require('express')
const bodyParser = require('body-parser')
const { batches, users } = require('./routes')
const passport = require('./config/auth')

const PORT = process.env.PORT || 3030

let app = express()

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(passport.initialize())

  // batches routes
  .use(users)
  .use(batches)

  // catch 404 and forward to error handler
  .use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
  })

  // final error handler
  .use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
      message: err.message,
      error: app.get('env') === 'development' ? err : {}
    })
  })

  .listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
  })
