"use strict"

import Express from 'express'
import Something from './coba'

// for ReferenceError: regeneratorRuntime is not defined
import 'babel-polyfill'

let app = Express()

app.get('/', (req, res) => {
  res.send('ok')
})

app.listen(11000, () => {
  console.log('Server listening!')

  let some = new Something()

  some.hore()
})